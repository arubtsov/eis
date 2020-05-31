const mongoose = require('mongoose')

module.exports = async function init (callback) {
    return mongoose.connect('mongodb://127.0.0.1:27017/products', { useNewUrlParser: true })
}
