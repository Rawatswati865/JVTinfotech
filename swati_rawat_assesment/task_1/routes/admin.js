var admin = require('../controllers/admin');
const express = require('express')
const router = express.Router()

router.post('/createProduct', admin.createProduct)
router.post('/UpdateProduct', admin.UpdateProduct)
router.post('/getProductById', admin.getProductById)
router.get('/getAllProducts', admin.getAllProducts)
router.post('/deleteProduct', admin.deleteProduct)

module.exports = router;

