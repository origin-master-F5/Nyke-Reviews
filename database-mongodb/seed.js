const Product = require('./').Product
var mongoose = require('mongoose');
const db = require('./index.js').db
const colors = require('colors')
const relativeReviewData = require('./seedData')
const namesData = require('./seedDataNames').namesData
const faker = require('faker')
const moment = require('moment')



const createProducts = () => {

  let finalReviewData = [] // this will hold 3 key value pairs, product name, id, and reviews(an array of objects)
  let randomAmount = Math.ceil(Math.random() * 40) // how many reviews a given product will have

  // loops over each product name
  for (var k = 0; k < namesData.length; k++) {
    let aSingleProduct = {}
    let reviews = [] // array of objects, each object is a review

    // loops over a number up to 53, determines how many reviews are built for a product
    for (var i = 0; i < randomAmount; i++) {
      //////////////////////////////////
      // BUILD A REVIEW
      //////////////////////////////////
      let uniqueIndexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
      let aReviewIndexFunction = () => {
        var randomIndex = Math.floor(Math.random() * uniqueIndexArray.length);
        return uniqueIndexArray.splice(randomIndex, 1)[0];
      }  // randomly picks a unique review index to use for this current review
      let aReviewIndex = aReviewIndexFunction()

      let currentRelativeData = relativeReviewData[aReviewIndex]  // current relative review object

      // now we need to add in the current name, and all the other data

      // BUILDS A RANDOM DATE IN NIKE'S FORMAT STARTING IN 2019
      function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
      let randomDateUnformatted = randomDate(new Date(2019, 0, 1), new Date())
      let randomDateFormatted = moment(randomDateUnformatted).format("LL")

      // ARRAY TO CHOOSE A RUN DISTANCE FROM
      let typeOfRunnerArray = ['3 miles or fewer', '3 - 10 miles', 'More than 10 miles']
      let typeOfTerrainArray = ['Treadmill / Indoors', 'Road', 'Track']

      // ARRAY TO CHOOSE AN IMAGE FROM
      let reviewImage = [
        'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/B61E1B739A161975A92AB28D7D2B08A9.app1_1579613533843_PZ320.jpeg',
        'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/315E0813E58EBBE72DF341004E24D952.app1_1583775393818_PZ320.jpeg',
        'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/23C5CCC0349927EA9C4FE8077A77D7F0.app1_1574197116929_PZ320.jpeg',
        'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/185FE1BC82FD4A16D691FE0F7B002BA9.app1_1571797784094_PZ320.jpeg',
        'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/7CF33235BEB9D0121B480441AC61DBEB.app1_1574204929128_PZ320.jpeg',
        'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/D9E4399A1F889304DC17A04FBCFD05DB.app1_1552241016796_PZ320.jpeg',
        'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/422D4488C25EA6FE6A2589A54361D842.app1_1524634291409-1_PZ320.jpeg'
      ]
      let aReviewPic = '';
      if (Math.random() >= 0.9) {
        aReviewPic = reviewImage[Math.floor(Math.random() * reviewImage.length)]
      }



      currentRelativeData.dateWritten = randomDateFormatted
      currentRelativeData.username = faker.internet.userName()
      location = `${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.countryCode()}`
      currentRelativeData.avgRunDistance = typeOfRunnerArray[Math.floor(Math.random() * typeOfRunnerArray.length)]
      currentRelativeData.terrain = typeOfTerrainArray[Math.floor(Math.random() * typeOfTerrainArray.length)]
      currentRelativeData.flagged = 0
      currentRelativeData.upvotes = Math.floor(Math.random() * 3)
      currentRelativeData.downvotes = (Math.random() >= 0.5) ? (Math.floor(Math.random() * 3)) : 0
      currentRelativeData.verified = Math.random() >= 0.8;
      currentRelativeData.image = aReviewPic;


      // push the final built review into the reviews array
      reviews.push(currentRelativeData)
    }
    //////////////////////////////////
    // BUILD A PRODUCT
    //////////////////////////////////
    aSingleProduct.productName = namesData[k]
    aSingleProduct.productId = k
    aSingleProduct.reviews = reviews

    //////////////////////////////////
    // BUILD ALL PRODUCTS
    //////////////////////////////////
    finalReviewData.push(aSingleProduct) // push the current product into the final array of products

  }

  //////////////////////////////////
  // RETURNS AN ARRAY OF OBJECTS, EACH OBJECT MATCHES OUR SCHEMA
  //////////////////////////////////
  return finalReviewData
};

// console.log(createProducts())

const insertMockData = function () {
  let stuffToInsert = createProducts()
  Product.insertMany(stuffToInsert)
  console.log('DB seeded'.green)
};

insertMockData()

