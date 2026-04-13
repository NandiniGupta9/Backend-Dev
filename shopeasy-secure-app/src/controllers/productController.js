const Product = require("../models/Product");

// FIX: prevent injection by NOT using raw query directly
exports.searchProducts = async (req, res) => {
  const keyword = req.query.q || "";

  const products = await Product.find({
    name: { $regex: keyword, $options: "i" }
  });

  res.json(products);
};