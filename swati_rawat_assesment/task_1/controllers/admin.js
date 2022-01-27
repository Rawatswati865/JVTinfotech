const Joi = require('joi');
const { ProductModel } = require('../models/productModel');


exports.createProduct = async (req, res) => {
    try {
        let { productName, productDescription, productCategory, productPrice } = req.body
        const schema = Joi.object({
            productName: Joi.string().required(),
            productDescription: Joi.string().required(),
            productCategory: Joi.string().required(),
            productPrice: Joi.number().required(),
        })

        const result = schema.validate(req.body);
        if (result.error) {
            if (result.error.details && result.error.details[0].message) {
                res.status(400).json({
                    message: result.error.details[0].message
                });
            } else {
                res.status(400).json({
                    message: result.error.message
                });
            }
            return;
        }

        let uploadData = { productName, productDescription, productCategory, productPrice }
        let product = new ProductModel(uploadData);
        product.save();
        res.status(200).json({
            message: "Product succcessfully Saved",
            response: product,
            status_code: 200
        })

    } catch (error) {
        res.status(403).json({ status_code: 403, message: error.message })
    }
}

exports.UpdateProduct = async (req, res) => {
    try {
        let { productId, productName, productDescription, productCategory, productPrice } = req.body
        const schema = Joi.object({
            productId: Joi.string().required(),
            productName: Joi.string().required(),
            productDescription: Joi.string().required(),
            productCategory: Joi.string().required(),
            productPrice: Joi.number().required(),
        })

        const result = schema.validate(req.body);
        if (result.error) {
            if (result.error.details && result.error.details[0].message) {
                res.status(400).json({
                    message: result.error.details[0].message
                });
            } else {
                res.status(400).json({
                    message: result.error.message
                });
            }
            return;
        }

        let uploadData = { productName, productDescription, productCategory, productPrice }
        let data = await ProductModel.findOneAndUpdate({ _id: productId },
            {
                $set: uploadData
            })
        res.status(200).json({
            message: "Product succcessfully Saved",
            response: uploadData,
            status_code: 200
        })

    } catch (error) {
        res.status(403).json({ status_code: 403, message: error.message })
    }
}

exports.getProductById = async (req, res) => {
    try {
        let { productId } = req.body
        let products = await ProductModel.findOne({ _id: productId });
        if (products) {
            res.status(200).json({ status_code: 200, message: "Product fetched successfully.", response: products });
        } else {
            throw new Error("No products found....")
        }
    } catch (error) {
        res.status(403).json({ status_code: 403, message: error.message })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        let products = await ProductModel.find({}).sort({ createdAt: -1 }).lean()
        if (products) {
            res.status(200).json({ status_code: 200, message: "products fetched successfully.", response: products });
        }
        else {
            throw new Error("Data not found")
        }
    }
    catch (error) {
        res.status(403).json({ status_code: 403, message: error.message })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        let { productId } = req.body
        let products = await ProductModel.findOneAndDelete({ _id: productId });
        if (products) {
            res.status(200).json({ status_code: 200, message: "Product deleted successfully." });
        }
        else {
            throw new Error("Data not found")
        }
    } catch (error) {
        res.status(403).json({ status_code: 403, message: error.message });
    }
}

