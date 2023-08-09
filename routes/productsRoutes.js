const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductControler');

router.get('/', ProductController.showProducts);

module.exports = router;