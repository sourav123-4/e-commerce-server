const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String
})

const reactProduct = new mongoose.model("product",productSchema);

module.exports = reactProduct;