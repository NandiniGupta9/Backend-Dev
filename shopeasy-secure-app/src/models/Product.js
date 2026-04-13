const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: {
    type: Number,
    min: [0, "Price cannot be negative"]
  },
  description: String
});

module.exports = mongoose.model("Product", productSchema);