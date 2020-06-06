const express = require('express')
const multer = require('multer')
const path = require('path')
const {
    createProduct,
    updateProduct,
    deleteProject,
    getProducts
} = require('../controllers/product-controller')

const router = express.Router()
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const fileName = `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`

        cb(null, fileName)
    }
})
const upload = multer({ storage })

router.post('/product', upload.single('image'), createProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProject)
router.get('/products', getProducts)

module.exports = router
