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

/*
Product Name
Header
comment body
rating 1-5
size 0-2
comfort 0-2
durability 0-2
date written
username
location
avg run distance: "More than 10 miles"
run terrain: "Treadmill/Indoors"
flagged: number
upvotes
downvotes
*/
