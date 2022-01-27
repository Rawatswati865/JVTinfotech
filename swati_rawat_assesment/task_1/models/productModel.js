const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    productDescription: {
        type: String,
    },
    productCategory: {
        type: String,
    },
    productPrice: {
        type: Number,
        default: 0
    }

}, {
    versionKey: false,
    collection: 'tbl_product',
    timestamps: true
});

exports.ProductModel = mongoose.model('tbl_product', productSchema);