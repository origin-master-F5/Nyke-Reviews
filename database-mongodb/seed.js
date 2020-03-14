const Product = require('./').Product
var mongoose = require('mongoose');
const db = require('./index.js').db
const colors = require('colors')
const relativeReviewData = require('./seedData')


const createProduct = (arrayOfRelativeData) => {
  // iterate over relative review data
  // add in a key with:
  // date: December 16, 2019
  // username
  // location
  // upvotes
  // verified user

  // profile(type of runner): I run:More than 10 milesI run on:Treadmill / Indoors
  // I run:3 miles or fewerI run on:I just like the gear
  // I run:3-10 milesI run on:Road
  // uploaded image
  // user image


  let product = {};
  product.item = `${adjectives[Math.floor(Math.random() * Math.floor(adjectives.length))]} ${brand[Math.floor(Math.random(brand.length) * Math.floor(4))]} ${noun[Math.floor(Math.random() * Math.floor(noun.length))]}`;
  product.min_cost = parseFloat(Math.ceil(Math.random() * Math.ceil(1000)));
  product.curr_bid = parseFloat(Math.ceil(Math.random() * Math.ceil(10000)));
  product.ends_in = Math.ceil(Math.random() * Math.ceil(3));

  product.image = `http://lorempixel.com/400/400/technics/${Math.ceil(Math.random() * Math.ceil(10))}`;
  return product
};

const createProducts = () => {
  let productsArr = [];
  for (let i = 0; i < 10; i++) {
    productsArr.push(createProduct())
  }
  return productsArr
}

const insertMockData = function () {
  let stuffToInsert = createProducts()
  Product.insertMany(stuffToInsert)
  console.log('DB seeded'.green)
};

insertMockData()

