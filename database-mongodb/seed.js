const Product = require('./index').Product
const mongoose = require('mongoose');
const db = require('./index.js').db
const colors = require('colors')
const relativeReviewData = require('./seedData')
const faker = require('faker')
const moment = require('moment')
const properFormat = require('./NicksData')


//////////////////////////////////
// BUILD ALL REVIEWS FOR A PRODUCT
//////////////////////////////////
const createReviews = () => {
  let reviewsArray = [] // array of objects, each object is a review
  let randomAmount = Math.ceil(Math.random() * 53) // how many reviews a given product will have (up to 53)
  // an array of numbers, used to pick a rewview index without duplicates
  let uniqueIndexArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35, 36, 37,
    38, 39, 40, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 50, 51, 52, 53
  ]

  //////////////////////////////////
  // BUILD A REVIEW
  //////////////////////////////////
  // loops over a number up to 53, determines how many reviews are built for a product
  for (let i = 0; i < randomAmount; i++) {

    //////////////////////////////////
    // PICK AN INCOMPLETE REVIEW OBJECT
    //////////////////////////////////

    // function that takes from array without replacement
    let aReviewIndexFunction = () => {
      let randomIndex = Math.floor(Math.random() * uniqueIndexArray.length);
      return uniqueIndexArray.splice(randomIndex, 1)[0];
    }
    let aReviewIndex = aReviewIndexFunction(); // randomly picks a unique review index to use for this current review
    let aReviewObject = relativeReviewData[aReviewIndex]  // current relative review object

    //////////////////////////////////
    // HELPERS FOR ADDING DATA
    //////////////////////////////////
    // builds a random date starting in 2019
    function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    let randomDateUnformatted = randomDate(new Date(2019, 0, 1), new Date())
    let randomDateFormatted = moment(randomDateUnformatted).format("LL") // format date
    let typeOfRunnerArray = ['3 miles or fewer', '3 - 10 miles', 'More than 10 miles']  // array to choose a reviewers run distance from
    let typeOfTerrainArray = ['Treadmill / Indoors', 'Road', 'Track']  // array to choose a reviewers terrain from
    // array to choose a product review image from
    let reviewImageArray = [
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/B61E1B739A161975A92AB28D7D2B08A9.app1_1579613533843_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/315E0813E58EBBE72DF341004E24D952.app1_1583775393818_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/23C5CCC0349927EA9C4FE8077A77D7F0.app1_1574197116929_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/185FE1BC82FD4A16D691FE0F7B002BA9.app1_1571797784094_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/7CF33235BEB9D0121B480441AC61DBEB.app1_1574204929128_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/D9E4399A1F889304DC17A04FBCFD05DB.app1_1552241016796_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/422D4488C25EA6FE6A2589A54361D842.app1_1524634291409-1_PZ320.jpeg'
    ]
    let aReviewPic = ''; // a variable that has a review product image 10% of the time
    if (Math.random() >= 0.9) {
      aReviewPic = reviewImageArray[Math.floor(Math.random() * reviewImageArray.length)]
    }


    //////////////////////////////////
    // BUILD OUT REVIEW OBJECT
    //////////////////////////////////
    aReviewObject.dateWritten = randomDateFormatted
    aReviewObject.username = faker.internet.userName()
    aReviewObject.location = `${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.countryCode()}`
    aReviewObject.avgRunDistance = typeOfRunnerArray[Math.floor(Math.random() * typeOfRunnerArray.length)]
    aReviewObject.terrain = typeOfTerrainArray[Math.floor(Math.random() * typeOfTerrainArray.length)]
    aReviewObject.flagged = 0
    aReviewObject.upvotes = Math.floor(Math.random() * 3)
    aReviewObject.downvotes = (Math.random() >= 0.5) ? (Math.floor(Math.random() * 3)) : 0
    aReviewObject.verified = Math.random() >= 0.8;
    aReviewObject.image = aReviewPic;

    reviewsArray.push(aReviewObject)  // push the final built review into the reviews array
  }

  return reviewsArray
};


//////////////////////////////////
// BUILD ALL PRODUCTS
//////////////////////////////////
const createProducts = () => {
  let productsArray = [] // an array of product objects, this is fed to database

  //////////////////////////////////
  // BUILD A PRODUCT
  //////////////////////////////////
  for (let k = 0; k < properFormat.length; k++) {
    let aSingleProduct = {} // object with 3 key value pairs, product name, id, and reviews(an array of objects)
    aSingleProduct.productName = properFormat[k].name
    aSingleProduct.productId = properFormat[k].nikeID
    aSingleProduct.price = properFormat[k].price
    aSingleProduct.discountPrice = properFormat[k].discountPrice
    aSingleProduct.productImage = properFormat[k].image
    aSingleProduct.reviews = createReviews()
    productsArray.push(aSingleProduct) // push the current product into the final array of products
  }

  return productsArray
}

const insertMockData = function () {
  let productsToInsert = createProducts()
  Product.insertMany(productsToInsert)
  console.log('DB seeded'.green)
};

insertMockData()

