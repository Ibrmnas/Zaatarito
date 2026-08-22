module.exports = (MenuItem) => {
    const router = require('express').Router();

    // Get all menu items
    router.get('/', async (req, res) => {
        try {
            const items = await MenuItem.find({ isAvailable: true });
            res.json({ success: true, items });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    });

    // Get single menu item
    router.get('/:id', async (req, res) => {
        try {
            const item = await MenuItem.findOne({ id: req.params.id });
            if (!item) {
                return res.status(404).json({ 
                    success: false, 
                    error: 'Item not found' 
                });
            }
            res.json({ success: true, item });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    });

    // Seed initial menu (for setup)
    router.post('/seed', async (req, res) => {
        try {
            // You'll populate this with your menu data
            // Use your existing menuSections data from translations.js
            res.json({ success: true, message: 'Menu seeded successfully' });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    });

    return router;
};