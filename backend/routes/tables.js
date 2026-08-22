const QRCode = require('qrcode');

module.exports = (Table) => {
    const router = require('express').Router();

    // Generate QR code for table
    router.post('/generate-qr', async (req, res) => {
        try {
            const { tableNumber, baseUrl } = req.body;
            
            if (!tableNumber) {
                return res.status(400).json({ 
                    success: false, 
                    error: 'Table number required' 
                });
            }

            // Generate QR code
            const orderUrl = `${baseUrl || 'http://localhost:3000'}?table=${tableNumber}`;
            const qrCode = await QRCode.toDataURL(orderUrl);

            // Save or update table
            let table = await Table.findOne({ number: tableNumber });
            if (table) {
                table.qrCode = qrCode;
                await table.save();
            } else {
                table = new Table({
                    number: tableNumber,
                    qrCode: qrCode
                });
                await table.save();
            }

            res.json({
                success: true,
                table: table,
                qrCode: qrCode,
                url: orderUrl
            });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    });

    // Get table info
    router.get('/:number', async (req, res) => {
        try {
            const table = await Table.findOne({ number: req.params.number });
            if (!table) {
                return res.status(404).json({ 
                    success: false, 
                    error: 'Table not found' 
                });
            }
            res.json({ success: true, table });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    });

    return router;
};