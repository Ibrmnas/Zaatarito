const { body, validationResult } = require('express-validator');

module.exports = (Order, io) => {
    const router = require('express').Router();

    // Validation rules
    const validateOrder = [
        body('items').isArray().withMessage('Items must be an array'),
        body('items.*.name').isString().withMessage('Item name required'),
        body('items.*.price').isNumeric().withMessage('Item price must be a number'),
        body('totalAmount').isNumeric().withMessage('Total amount must be a number'),
        body('tableNumber').optional().isInt({ min: 0 }).withMessage('Table number must be a positive integer')
    ];

    // Create order (alternative to socket)
    router.post('/', validateOrder, async (req, res) => {
        try {
            // Check validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ 
                    success: false, 
                    errors: errors.array() 
                });
            }

            const { items, tableNumber, totalAmount, customerName, specialRequests } = req.body;

            const order = new Order({
                tableNumber: tableNumber || 0,
                items: items,
                totalAmount: totalAmount,
                customerName: customerName || '',
                specialRequests: specialRequests || '',
                ipAddress: req.ip,
                isTakeout: !tableNumber || tableNumber === 0
            });

            await order.save();

            // Emit to kitchen via socket
            io.emit('orderReceived', {
                ...order.toObject(),
                _id: order._id.toString()
            });

            res.status(201).json({
                success: true,
                order: order,
                orderNumber: order.orderNumber
            });

        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ 
                success: false, 
                error: error.message 
            });
        }
    });

    // Get orders (with filters)
    router.get('/', async (req, res) => {
        try {
            const { status, limit = 50, page = 1 } = req.query;
            const skip = (page - 1) * limit;

            const query = {};
            if (status) query.status = status;

            const orders = await Order.find(query)
                .sort({ orderTime: -1 })
                .limit(parseInt(limit))
                .skip(skip);

            const total = await Order.countDocuments(query);

            res.json({
                success: true,
                orders,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    });

    // Get single order
    router.get('/:id', async (req, res) => {
        try {
            const order = await Order.findById(req.params.id);
            if (!order) {
                return res.status(404).json({ 
                    success: false, 
                    error: 'Order not found' 
                });
            }
            res.json({ success: true, order });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    });

    // Update order status
    router.put('/:id/status', async (req, res) => {
        try {
            const { status } = req.body;
            const validStatuses = ['pending', 'preparing', 'ready', 'served', 'cancelled'];
            
            if (!validStatuses.includes(status)) {
                return res.status(400).json({ 
                    success: false, 
                    error: 'Invalid status' 
                });
            }

            const order = await Order.findById(req.params.id);
            if (!order) {
                return res.status(404).json({ 
                    success: false, 
                    error: 'Order not found' 
                });
            }

            order.status = status;
            if (status === 'served') {
                order.completedTime = new Date();
            }
            await order.save();

            // Broadcast update
            io.emit('orderStatusUpdated', {
                orderId: order._id,
                status: status,
                orderNumber: order.orderNumber
            });

            res.json({ success: true, order });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    });

    return router;
};