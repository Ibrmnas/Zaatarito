const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const socketIo = require('socket.io');
const http = require('http');
const path = require('path'); // Added for serving the frontend
require('dotenv').config();

const app = express();
const server = http.createServer(app);

// ===== CORS for Socket.io =====
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true
    }
});

// ===== CORS for Express =====
app.use(cors({
    origin: "*",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// ===== Helmet =====
// RELAXED TO ALLOW QR CODE IMAGES TO LOAD FROM EXTERNAL API
app.use(helmet({
    contentSecurityPolicy: false, // Disables strict CSP that blocks images
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// ===== Rate Limiting =====
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP'
});
app.use('/api/', limiter);

// ===== Body Parser =====
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ==================== STATIC FILES (FRONTEND) ====================
// Serve files from the 'frontend' folder located one level up from 'backend'
const frontendPath = path.join(__dirname, '..', 'frontend');

// Serve files from the 'kitchen-display' folder located ONE level up from 'backend' (alongside frontend)
const kitchenDisplayPath = path.join(__dirname, '..', 'kitchen-display');

// Define the path to the root-level qr-codes.html file
const qrCodesPath = path.join(__dirname, '..', 'qr-codes.html');

// Serve the main frontend
app.use(express.static(frontendPath));

// Serve the kitchen display specifically
app.use('/kitchen-display', express.static(kitchenDisplayPath));

// ==================== DATABASE CONNECTION ====================

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/restaurant';
let useInMemoryDB = false;

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    console.log(`📊 Database: ${mongoose.connection.db.databaseName}`);
})
.catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('⚠️ Using in-memory storage instead');
    useInMemoryDB = true;
});

// ==================== ORDER SCHEMA ====================

function generateOrderNumber() {
    const date = new Date();
    const prefix = date.getFullYear().toString().slice(-2) +
                   String(date.getMonth() + 1).padStart(2, '0') +
                   String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `ZA-${prefix}-${random}`;
}

let Order;
try {
    Order = mongoose.model('Order');
} catch {
    const orderSchema = new mongoose.Schema({
        orderNumber: { type: String, unique: true },
        tableNumber: { type: Number, default: 0 },
        items: [{
            name: String,
            price: Number,
            quantity: { type: Number, default: 1 },
            optionType: String
        }],
        totalAmount: { type: Number, required: true },
        status: {
            type: String,
            enum: ['pending', 'preparing', 'ready', 'served', 'cancelled'],
            default: 'pending'
        },
        orderTime: { type: Date, default: Date.now },
        completedTime: Date,
        customerName: { type: String, default: '' },
        specialRequests: { type: String, default: '' },
        isTakeout: { type: Boolean, default: false }
    });
    Order = mongoose.model('Order', orderSchema);
}

// ==================== IN-MEMORY STORAGE ====================

let orders = [];
let orderCounter = 0;

// ==================== SOCKET.IO ====================

io.on('connection', (socket) => {
    console.log('🟢 Client connected:', socket.id);

    socket.on('newOrder', async (orderData) => {
        try {
            console.log('📦 New order received:', orderData);
            let order;
            if (useInMemoryDB) {
                const orderNumber = generateOrderNumber();
                order = {
                    _id: `order_${Date.now()}_${orderCounter++}`,
                    orderNumber: orderNumber,
                    tableNumber: orderData.tableNumber || 0,
                    items: orderData.items || [],
                    totalAmount: orderData.totalAmount || 0,
                    status: 'pending',
                    orderTime: new Date(),
                    completedTime: null,
                    customerName: orderData.customerName || '',
                    specialRequests: orderData.specialRequests || '',
                    isTakeout: !orderData.tableNumber || orderData.tableNumber === 0
                };
                orders.push(order);
                console.log('✅ Order saved to memory:', order.orderNumber, 'Table:', order.tableNumber);
            } else {
                const orderNumber = generateOrderNumber();
                order = new Order({
                    orderNumber: orderNumber,
                    tableNumber: orderData.tableNumber || 0,
                    items: orderData.items || [],
                    totalAmount: orderData.totalAmount || 0,
                    customerName: orderData.customerName || '',
                    specialRequests: orderData.specialRequests || '',
                    isTakeout: !orderData.tableNumber || orderData.tableNumber === 0,
                    status: 'pending'
                });
                await order.save();
                console.log('✅ Order saved to MongoDB:', order.orderNumber, 'Table:', order.tableNumber);
            }
            io.emit('orderReceived', order);
            socket.emit('orderConfirmed', {
                success: true,
                orderNumber: order.orderNumber,
                orderId: order._id,
                tableNumber: order.tableNumber
            });
        } catch (error) {
            console.error('❌ Error saving order:', error);
            socket.emit('orderError', { 
                success: false, 
                error: error.message 
            });
        }
    });

    socket.on('updateOrderStatus', async (data) => {
        try {
            const { orderId, status } = data;
            let order = null;
            if (useInMemoryDB) {
                order = orders.find(o => o._id === orderId);
                if (order) {
                    order.status = status;
                    if (status === 'served') {
                        order.completedTime = new Date();
                    }
                }
            } else {
                order = await Order.findById(orderId);
                if (order) {
                    order.status = status;
                    if (status === 'served') {
                        order.completedTime = new Date();
                    }
                    await order.save();
                }
            }
            if (order) {
                io.emit('orderStatusUpdated', {
                    orderId: order._id,
                    status: status,
                    orderNumber: order.orderNumber,
                    tableNumber: order.tableNumber
                });
                console.log(`🔄 Order #${order.orderNumber} (Table ${order.tableNumber}) status: ${status}`);
            } else {
                socket.emit('statusUpdateError', { error: 'Order not found' });
            }
        } catch (error) {
            console.error('❌ Error updating order:', error);
            socket.emit('statusUpdateError', { error: error.message });
        }
    });

    socket.on('getActiveOrders', async () => {
        try {
            let activeOrders = [];
            if (useInMemoryDB) {
                activeOrders = orders.filter(o => 
                    ['pending', 'preparing', 'ready', 'served'].includes(o.status)
                );
            } else {
                activeOrders = await Order.find({
                    status: { $in: ['pending', 'preparing', 'ready', 'served'] }
                }).sort({ orderTime: -1 });
            }
            socket.emit('activeOrders', activeOrders);
            console.log(`📋 Sent ${activeOrders.length} active orders`);
        } catch (error) {
            console.error('❌ Error fetching orders:', error);
            socket.emit('error', { error: 'Failed to fetch orders' });
        }
    });

    socket.on('disconnect', () => {
        console.log('🔴 Client disconnected:', socket.id);
    });
});

// ==================== ROUTES ====================

// Health check
app.get('/api/health', (req, res) => {
    const dbState = mongoose.connection.readyState;
    const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        database: states[dbState] || 'unknown',
        storage: !useInMemoryDB && dbState === 1 ? 'mongodb-atlas' : 'in-memory'
    });
});

// Get all orders
app.get('/api/orders', async (req, res) => {
    try {
        let allOrders = [];
        if (useInMemoryDB) {
            allOrders = orders;
        } else {
            allOrders = await Order.find().sort({ orderTime: -1 });
        }
        res.json({
            success: true,
            orders: allOrders,
            count: allOrders.length
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// ===== GET ORDERS BY TABLE NUMBER =====
app.get('/api/orders/table/:tableNumber', async (req, res) => {
    try {
        const tableNumber = parseInt(req.params.tableNumber);
        let tableOrders = [];
        
        if (useInMemoryDB) {
            tableOrders = orders.filter(o => o.tableNumber === tableNumber);
        } else {
            tableOrders = await Order.find({ tableNumber: tableNumber }).sort({ orderTime: -1 });
        }
        
        res.json({
            success: true,
            orders: tableOrders,
            count: tableOrders.length,
            tableNumber: tableNumber
        });
    } catch (error) {
        console.error('❌ Error fetching table orders:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// ==================== CASHIER ROUTES ====================

// Get all active orders grouped by table (for cashier screen)
app.get('/api/cashier/tables', async (req, res) => {
    try {
        let activeOrders = [];
        if (useInMemoryDB) {
            activeOrders = orders.filter(o => ['pending', 'preparing', 'ready', 'served'].includes(o.status));
        } else {
            activeOrders = await Order.find({ 
                status: { $in: ['pending', 'preparing', 'ready', 'served'] } 
            }).sort({ orderTime: -1 });
        }

        // Group by table number
        const tables = {};
        activeOrders.forEach(order => {
            const tableNum = order.tableNumber || 0;
            if (!tables[tableNum]) {
                tables[tableNum] = { total: 0, orders: [] };
            }
            tables[tableNum].total += order.totalAmount;
            tables[tableNum].orders.push(order);
        });

        res.json({ success: true, tables });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Mark table as paid and delete its active orders
app.post('/api/cashier/table/:tableNumber/paid', async (req, res) => {
    try {
        const tableNumber = parseInt(req.params.tableNumber);
        let deletedCount = 0;
        
        if (useInMemoryDB) {
            const ordersToDelete = orders.filter(o => o.tableNumber === tableNumber && ['pending', 'preparing', 'ready', 'served'].includes(o.status));
            deletedCount = ordersToDelete.length;
            orders = orders.filter(o => !(o.tableNumber === tableNumber && ['pending', 'preparing', 'ready', 'served'].includes(o.status)));
        } else {
            const result = await Order.deleteMany({ 
                tableNumber: tableNumber, 
                status: { $in: ['pending', 'preparing', 'ready', 'served'] } 
            });
            deletedCount = result.deletedCount;
        }

        // Tell the customer to clear their screen
        io.emit('orderCleared', { tableNumber });
        
        res.json({ success: true, deletedCount });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// ===== GET SINGLE ORDER BY ID =====
app.get('/api/orders/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        let order = null;
        if (useInMemoryDB) {
            order = orders.find(o => o._id === orderId);
        } else {
            order = await Order.findById(orderId);
        }
        if (!order) {
            return res.status(404).json({ 
                success: false, 
                error: 'Order not found' 
            });
        }
        res.json({
            success: true,
            order: order
        });
    } catch (error) {
        console.error('❌ Error fetching order:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// ===== CREATE ORDER (REST API) =====
app.post('/api/orders', async (req, res) => {
    try {
        const orderData = req.body;
        console.log('📦 REST API: New order received for table:', orderData.tableNumber);
        let order;
        if (useInMemoryDB) {
            const orderNumber = generateOrderNumber();
            order = {
                _id: `order_${Date.now()}_${orderCounter++}`,
                orderNumber: orderNumber,
                tableNumber: orderData.tableNumber || 0,
                items: orderData.items || [],
                totalAmount: orderData.totalAmount || 0,
                status: 'pending',
                orderTime: new Date(),
                completedTime: null,
                customerName: orderData.customerName || '',
                specialRequests: orderData.specialRequests || '',
                isTakeout: !orderData.tableNumber || orderData.tableNumber === 0
            };
            orders.push(order);
        } else {
            const orderNumber = generateOrderNumber();
            order = new Order({
                orderNumber: orderNumber,
                tableNumber: orderData.tableNumber || 0,
                items: orderData.items || [],
                totalAmount: orderData.totalAmount || 0,
                customerName: orderData.customerName || '',
                specialRequests: orderData.specialRequests || '',
                isTakeout: !orderData.tableNumber || orderData.tableNumber === 0,
                status: 'pending'
            });
            await order.save();
        }
        io.emit('orderReceived', order);
        res.status(201).json({
            success: true,
            order: order,
            orderNumber: order.orderNumber,
            orderId: order._id,
            tableNumber: order.tableNumber
        });
    } catch (error) {
        console.error('❌ REST API Error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// ==================== QR CODES ROUTE ====================
// Handle BOTH /qr-codes and /qr-codes.html
app.get(['/qr-codes', '/qr-codes.html'], (req, res) => {
    res.sendFile(qrCodesPath);
});

// ===== CATCH-ALL FOR FRONTEND (Must be BEFORE the API 404) =====
// This ensures that if a user opens the main URL, they get the HTML file
app.get('*', (req, res, next) => {
    // Skip API routes, kitchen-display routes, and qr-codes routes
    if (req.path.startsWith('/api/') || req.path.startsWith('/kitchen-display/') || req.path.startsWith('/qr-codes')) {
        return next(); 
    }
    
    // Serve the cashier page if requested
    if (req.path === '/cashier') {
        return res.sendFile(path.join(frontendPath, 'cashier.html'));
    }
    
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// ===== 404 HANDLER (API only) =====
app.use('/api/', (req, res) => {
    res.status(404).json({ 
        success: false, 
        error: 'Endpoint not found' 
    });
});

// ===== ERROR HANDLER =====
app.use((err, req, res, next) => {
    console.error('❌ Server Error:', err.message);
    res.status(500).json({ 
        success: false, 
        error: 'Internal server error' 
    });
});

// ==================== START SERVER ====================

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 Socket.io ready`);
    console.log(`🔐 Kitchen PIN: 1234`);
    console.log(`💾 Storage mode: ${useInMemoryDB ? 'IN-MEMORY' : 'MongoDB Atlas'}`);
});

module.exports = { app, server, io };
