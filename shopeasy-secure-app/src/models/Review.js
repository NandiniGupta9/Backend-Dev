const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  productId: mongoose.Schema.Types.ObjectId,
  comment: String
});

module.exports = mongoose.model("Review", reviewSchema);