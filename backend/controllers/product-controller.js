const fs = require('fs')
const Product = require('../models/product-model');

const createProduct = async (req, res) => {
    const { body, file } = req
    let product = null;

    try {
        product = new Product({ ...body, imageUrl: file.path })
    }
    catch (error) {
        return res.status(400).json({ success: false, error: error.toString() })
    }

    try {
        await product.save()

        return res.status(201).json({ success: true, id: product._id, imageUrl: file.path })
    }
    catch (error) {
        return res.status(500).json({ success: false, error: error.toString() })
    }
}

const updateProduct = async (req, res) => {
    const { body } = req
    let product = null

    if (!body)
        return res.status(400).json({ success: false })

    try {
        product = await Product.findById(req.params.id).exec()
    }
    catch (error) {
        return res.status(404).json({ success: false, error: error.toString() })
    }

    try {
        await product.update(body).exec()

        return res.status(200).json({ success: true })
    }
    catch (error) {
        return res.status(500).json({ success: false, error: error.toString() })
    }
}

const deleteProject = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id).exec()
        fs.unlinkSync(product.imageUrl)

        return res.status(204).json({ success: true })
    }
    catch (error) {
        return res.status(404).json({ success: false, error: error.toString() })
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}).exec()

        return res.status(200).json({ success: true, data: products })
    }
    catch (error) {
        return res.status(500).json({ success: false, error: error.toString() })
    }
}


module.exports = { createProduct, updateProduct, deleteProject, getProducts }
