const Product = require('./index').Product;
const mongoose = require('mongoose');
const db = require('./index.js').db;
const colors = require('colors');
const relativeReviewData = require('./seedData');
const faker = require('faker');
const moment = require('moment');
const upperLimit = 1000;
// const properFormat = require('./NicksData');


const generateShoeData = (generations) => {
  let generatedData = [];
  let nikeID = 211;

  for (let i = 0; i < generations; i++) {
    let shoeObj = {};
    shoeObj.name = 'Nike Air Zoom Pegasus FlyEase FlyKnit';
    shoeObj.discountPrice = Math.round(Math.random() * (149 - 100) + 100);
    shoeObj.price = Math.round(Math.random() * (250 - 150) + 150);
    shoeObj.nikeID = nikeID;
    shoeObj.image = 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/39530e3c-2330-48b9-a7a6-72eb0e8c35ae/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg';
    nikeID++;
    generatedData.push(shoeObj);
  }
  return generatedData;
};

const productData = generateShoeData(upperLimit);



//////////////////////////////////
// BUILD ALL REVIEWS FOR A PRODUCT
//////////////////////////////////
const createReviews = () => {
  let reviewsArray = []; // array of objects, each object is a review
  let randomAmount = Math.round(Math.random() * 50); // how many reviews a given product will have (up to 53)
  // an array of numbers, used to pick a review index without duplicates
  for (let i = 0; i < randomAmount; i++) {
    let aReviewObject = {};
    //////////////////////////////////
    ///// HELPERS FOR ADDING DATA ////
    //////////////////////////////////

    let randomDateUnformatted = faker.date.past(1, '2020-04-01');
    let randomDateFormatted = moment(randomDateUnformatted).format('LL'); // format date
    let typeOfRunnerArray = ['3 miles or fewer', '3 - 10 miles', 'More than 10 miles']; // array to choose a reviewers run distance from
    let typeOfTerrainArray = ['Treadmill / Indoors', 'Road', 'Track']; // array to choose a reviewers terrain from
    // array to choose a product review image from
    let reviewImageArray = [
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/B61E1B739A161975A92AB28D7D2B08A9.app1_1579613533843_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/315E0813E58EBBE72DF341004E24D952.app1_1583775393818_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/23C5CCC0349927EA9C4FE8077A77D7F0.app1_1574197116929_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/185FE1BC82FD4A16D691FE0F7B002BA9.app1_1571797784094_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/7CF33235BEB9D0121B480441AC61DBEB.app1_1574204929128_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/D9E4399A1F889304DC17A04FBCFD05DB.app1_1552241016796_PZ320.jpeg',
      'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/422D4488C25EA6FE6A2589A54361D842.app1_1524634291409-1_PZ320.jpeg'
    ];
    let aReviewPic = ''; // a variable that has a review product image 10% of the time
    if (Math.random() >= 0.9) {
      aReviewPic = reviewImageArray[Math.floor(Math.random() * reviewImageArray.length)];
    }


    //////////////////////////////////
    ///// BUILD OUT REVIEW OBJECT/////
    //////////////////////////////////
    aReviewObject.dateWritten = randomDateFormatted;
    aReviewObject.username = faker.internet.userName();
    aReviewObject.location = `${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.countryCode()}`;
    aReviewObject.avgRunDistance = typeOfRunnerArray[Math.floor(Math.random() * typeOfRunnerArray.length)];
    aReviewObject.terrain = typeOfTerrainArray[Math.floor(Math.random() * typeOfTerrainArray.length)];
    aReviewObject.flagged = 0;
    aReviewObject.upvotes = Math.floor(Math.random() * 3);
    aReviewObject.downvotes = (Math.random() >= 0.5) ? (Math.floor(Math.random() * 3)) : 0;
    aReviewObject.verified = Math.random() >= 0.8;
    aReviewObject.image = aReviewPic;

    reviewsArray.push(aReviewObject); // push the final built review into the reviews array
  }

  return reviewsArray;
};


//////////////////////////////////
// BUILD ALL PRODUCTS
//////////////////////////////////
const createProducts = (data) => {

  //////////////////////////////////
  // BUILD A PRODUCT
  //////////////////////////////////
  for (let k = 0; k < data.length; k++) {
    data.reviews = createReviews();
  }

  return data;
};

// const insertMockData = function() {
//   const start = process.hrtime.bigint();
//   let productsToInsert = createProducts();
//   Product.deleteMany()
//     .then(() => Product.insertMany(productsToInsert))
//     .then(() => console.log('DB seeded'.green))
//     .then(() => db.close())
//     .then(() => {
//       const end = process.hrtime.bigint();
//       const bigNum = Number(end - start);
//       let ms = bigNum / 1000000;
//       let secs = ms / 1000;
//       return console.log(`Seeding took ${ms} milliseconds and ${secs} seconds for 10,000 products`);
//     });

// };

// insertMockData();


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, connection) {
  if (err) { throw err; }
  const nykeDb = connection.db('NykeReviews');

  const dataStart = process.hrtime.bigint();
  const productsToInsert = createProducts(productData);
  const dataEnd = process.hrtime.bigint();
  const bigNum = Number(dataEnd - dataStart);
  let dataMs = bigNum / 1000000;
  let dataSecs = Number((dataMs / 1000).toFixed(1)).toFixed(2);

  console.log(`Data generating took ${dataMs} milliseconds and ${dataSecs} seconds`);

  const seedStart = process.hrtime.bigint();
  nykeDb.collection('products').deleteMany()
    .then(() => nykeDb.collection('products').insertMany(productsToInsert))
    .then((res) => {
      console.log('Number of documents inserted: ' + res.insertedCount);
      connection.close();
      const seedEnd = process.hrtime.bigint();
      const bigNum = Number(seedEnd - seedStart);
      let ms = bigNum / 1000000;
      let secs = Number((ms / 1000).toFixed(1)).toFixed(2);
      return console.log(`Seeding took ${ms} milliseconds and ${secs} seconds`);
    })
    .catch((err) => console.error('seeding error: ', err));
});