const mongoose = require('mongoose');

var reviewsSchema = new mongoose.Schema({
  header: { type: String, default: '' },
  comment: { type: String, default: '' },
  star: { type: Number, default: 3 },
  size: { type: Number, default: 1 },
  comfort: { type: Number, default: 1 },
  durability: { type: Number, default: 1 },
  dateWritten: { type: String, default: '' },
  username: { type: String, default: '' },
  location: { type: String, default: '' },
  avgRunDistance: { type: String, default: '' },
  terrain: { type: String, default: '' },
  flagged: { type: Number, default: 0 },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  verified: { type: Boolean, default: false },
  image: { type: String, default: '' }
})

var productSchema = new mongoose.Schema({
  productName: String,
  productId: {
    type: Number,
    required: true,
    unique: true
  },
  reviews: [reviewsSchema],
  price: Number,
  discountPrice: Number,
  productImage: String
});

module.exports = productSchema;

