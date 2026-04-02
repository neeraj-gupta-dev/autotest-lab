const Product = require('../models/Product');

// @desc    Fetch all products from MongoDB
// @route   GET /api/products
// @access  Private (Requires token)
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error fetching database products' });
    }
};

// @desc    Fetch single product by MongoDB ID
// @route   GET /api/products/:id
// @access  Private (Requires token)
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not in database' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Invalid product database ID' });
    }
};

module.exports = {
    getProducts,
    getProductById
};
