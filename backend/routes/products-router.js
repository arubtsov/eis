const express = require('express')
const {
    createProduct,
    updateProduct,
    deleteProject,
    getProducts
} = require('../controllers/product-controller')

const router = express.Router()

router.post('/product', createProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProject)
router.get('/products', getProducts)

module.exports = router
