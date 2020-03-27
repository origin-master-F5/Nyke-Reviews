const mongoose = require('mongoose');

var reviewsSchema = new mongoose.Schema({
  header: String,
  comment: String,
  star: Number,
  size: Number,
  comfort: Number,
  durability: Number,
  dateWritten: String,
  username: String,
  location: String,
  avgRunDistance: String,
  terrain: String,
  flagged: { type: Number, default: 0 },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  verified: { type: Boolean, default: false },
  image: String
})

var productSchema = new mongoose.Schema({
  productName: String,
  productId: {
    type: Number,
    required: true,
    unique: true
  },
  reviews: [reviewsSchema]
});

module.exports = productSchema;

