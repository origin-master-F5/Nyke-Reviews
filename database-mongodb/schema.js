const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  productName: String,
  header: String,
  commentBody: String,
  rating: Number,
  size: Number,
  comfort: Number,
  durability: Number,
  createdAt:
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
