const Product = require('./index').Product;
const mongoose = require('mongoose');
const db = require('./index.js').db;
const colors = require('colors');
const relativeReviewData = require('./seedData');
const faker = require('faker');
const moment = require('moment');
const generationNum = 10000


const start = process.hrtime.bigint();
const randomRange = (max, min) => {
  Math.ceil(Math.random() * (max - min) + min)
}
const randomNum = (num) => {
  Math.round(Math.random() * num)
}
const getBenchmark = (start, end, operation, batchNum) => {
  const bigNum = Number(end - start);
  const ms = bigNum / 1000000;
  const secs = (ms / 1000).toFixed(2);
  const mins = (secs / 1000).toFixed(3);
  return `${operation} times: ${ms} (ms) / ${secs} (secs) / ${mins} (mins) for ${batchNum} products`;
}
  // const productData = generateShoeData(generationNum);


async function seed(set, batch) {
  function* generateData(chunks, upperLimit) {
    const genStart = process.hrtime.bigint();
    const total = chunks * upperLimit;
    let nikeID = 100;
    let totalIncrementor = 0;
    while (totalIncrementor < total) {
      let chunkIncrementor = 0;
      while (chunkIncrementor < chunks) {
        let upperLimitIncrementor = 0;
        let products = [];
        while (upperLimitIncrementor < upperLimit) {
          let shoe = {};
          shoe.productName = 'Nike Air Zoom Pegasus FlyEase FlyKnit';
          shoe.productId = nikeID;
          shoe.reviews = [];
          shoe.discountPrice = Math.round(Math.random() * (149 - 100) + 100);
          shoe.price = Math.round(Math.random() * (250 - 150) + 150);
          shoe.productImage = faker.image.fashion();
          nikeID++;
          for (let i = 0; i < (Math.round(Math.random() * 50)); i++) {
            let review = {}
            let distanceArray = ['3 miles or fewer', '3 - 10 miles', 'More than 10 miles'];
            let terrainArray = ['Treadmill / Indoors', 'Road', 'Track'];
            review.header = faker.lorem.sentence();
            review.comment = faker.lorem.paragraph();
            review.star = randomRange(5, 1);
            review.size = randomRange(3, 1);
            review.comfort = randomRange(3, 1);
            review.durability = randomRange(3, 1);
            let dateUnformatted = faker.date.past(1, '2020-04-01');
            review.dateWritten = moment(dateUnformatted).format('LL');
            review.username = faker.internet.userName();
            review.location = `${faker.address.city()}, ${faker.address.stateAbbr()}, address.countryCode()}`;
            review.avgRunDistance = distanceArray[randomNum(distanceArray.length)];
            review.terrain = terrainArray[randomNum(terrainArray.length)];
            review.flagged = 0;
            review.upvotes = randomNum(10);
            review.downvotes = randomNum(2);
            review.verified = Math.random() >= 0.8;
            if (Math.random() >= 0.9) {
              review.image = faker.image.fashion();
            }
            shoe.reviews.push(review);
          }
          products.push(shoe);
          upperLimitIncrementor++
          totalIncrementor++
        }
        chunkIncrementor++
        yield products;
      }
    }
    const genEnd = process.hrtime.bigint();
    console.log(getBenchmark(genStart, genEnd, 'Data Generating', total))
  }
  const seedStart = process.hrtime.bigint();
  let insertCount = 0
  for (let products of generateData(set, batch)) {
    insertCount += products.length;
    await Product.insertMany(products)
    console.log(`inserted so far: ${insertCount}`)
  }
  const seedEnd = process.hrtime.bigint();
  console.log(getBenchmark(seedStart, seedEnd, 'Seeding', set * batch))
}
const totalStart = process.hrtime.bigint();
Product.deleteMany()
  .then(() => seed(10, 100))
  .then(() => {
    totalEnd = process.hrtime.bigint();
    console.log(getBenchmark(totalStart, totalEnd, 'Together, they took', 10 * 100))
  })
  .then(() => db.close())















































// async function testFunc(currentData) {
//     await Product.insertMany(currentData)
//     console.log(currentData.length);
// }


// async function generateShoeData(generations) {
//     let generatedData = [];
//     let nikeID = 100;

//     for (let i = 0; i < generations; i++) {
//         let shoeObj = {};
//         shoeObj.productName = 'Nike Air Zoom Pegasus FlyEase FlyKnit';
//         shoeObj.discountPrice = Math.round(Math.random() * (149 - 100) + 100);
//         shoeObj.price = Math.round(Math.random() * (250 - 150) + 150);
//         shoeObj.productId = nikeID;
//         shoeObj.productImage = 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/39530e3c-2330-48b9-a7a6-72eb0e8c35ae/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg';
//         nikeID++;
//         generatedData.push(shoeObj);
//         if (generatedData.length === 1000) {
//             await testFunc(generatedData)
//         }
//     }



// };

// generateShoeData(generationNum)
//     .then(() => db.close())
//     .then(() => {
//         const end = process.hrtime.bigint();
//         const bigNum = Number(end - start);
//         let ms = bigNum / 1000000;
//         let secs = ms / 1000;
//         return console.log(`Seeding took ${ms} milliseconds and ${secs} seconds for ${generationNum} products`);
//     })