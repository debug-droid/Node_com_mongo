const Product = require('../models/Product');

module.exports = class ProductControler {
    static showProducts( req, res) {
        res.render('products/all');
    }
}