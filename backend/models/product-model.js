const { Schema, model } = require('mongoose')
const { String, Decimal128, Number } = Schema.Types;

const Product = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Decimal128, required: true },
        quantity: { type: Number, required: true },
        colour: { type: String, required: true },
        imageUrl: { type: String, required: true }
    },
    { timestamps: true },
)

Product.set('toJSON', {
    getters: true,
    transform: (doc, ret) => {
        ret.price = parseFloat(ret.price.toString());
        delete ret.__v;
        return ret;
    },
});

module.exports = model('products', Product)
