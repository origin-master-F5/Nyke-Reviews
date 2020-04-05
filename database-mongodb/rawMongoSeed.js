// const Product = require('./index').Product;
// const db = require('./index.js').db;
const colors = require('colors');
const relativeReviewData = require('./seedData');
const faker = require('faker');
const moment = require('moment');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
MongoClient.connect(url, (err, db) => {
    console.log('MongoDB connected!'.cyan)
    const nykeDb = db.db('NykeReviews')
    const start = process.hrtime.bigint();
    const randomRange = (max, min) => {
        return Math.ceil(Math.random() * (max - min) + min)
    }
    const randomNum = (num) => {
        return Math.round(Math.random() * num)
    }
    const getBenchmark = (start, end, operation, batchNum) => {
            const bigNum = Number(end - start);
            const ms = bigNum / 1000000;
            const secs = (ms / 1000).toFixed(2);
            const mins = (secs / 60).toFixed(3);
            return `${operation} times: ${ms} (ms) / ${secs} (secs) / ${mins} (mins) for ${batchNum} products`;
        }
        // const productData = generateShoeData(generationNum);
    async function seed(set, batch, time) {
        function* generateData(chunks, upperLimit) {
                // const genStart = process.hrtime.bigint();
                const total = chunks * upperLimit;
                let nikeID = 100;
                let products = [];
                let upperLimitIncrementor = 0;
                while (upperLimitIncrementor < total) {
                    let shoe = {};
                    shoe.productName = 'Nike Air Zoom Pegasus FlyEase FlyKnit';
                    shoe.productId = nikeID;
                    shoe.reviews = [];
                    shoe.discountPrice = Math.round(Math.random() * (149 - 100) + 100);
                    shoe.price = Math.round(Math.random() * (250 - 150) + 150);
                    shoe.productImage = faker.image.fashion();
                    nikeID++;
                    reviewIncrementor = 0;
                    while (reviewIncrementor < randomNum(30)) {
                        let review = {}
                        let distanceArray = ['3 miles or fewer', '3 - 10 miles', 'More than 10 miles'];
                        let terrainArray = ['Treadmill / Indoors', 'Road', 'Track'];
                        review.header = faker.lorem.sentence();
                        review.comment = faker.lorem.paragraph();
                        review.star = randomRange(5, 1);
                        review.size = randomNum(3);
                        review.comfort = randomNum(3);
                        review.durability = randomNum(3);
                        let dateUnformatted = faker.date.past(1, '2020-04-01');
                        review.dateWritten = moment(dateUnformatted).format('LL');
                        review.username = faker.internet.userName();
                        review.location = `${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.countryCode()}`;
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
                        reviewIncrementor++
                    }
                    // shoe.reviews = JSON.stringify(shoe.reviews)
                    // if (!products[0]) {
                    //   products[0] = []
                    // }
                    products.push(shoe);
                    if (products.length === upperLimit) {
                        yield products
                        products = []
                    }
                    upperLimitIncrementor++
                }
                // const genEnd = process.hrtime.bigint();
                // console.log(getBenchmark(genStart, genEnd, 'Data Generating', total))
            }
            // const seedStart = process.hrtime.bigint();
        let insertCount = 0
        for (let products of generateData(set, batch)) {
            insertCount += products.length;
            //  await Product.insertMany(products)
            await nykeDb.collection('products').insertMany(products)
            console.log(`inserted so far: ${insertCount}`)
        }
        // const seedEnd = process.hrtime.bigint();
        // console.log(getBenchmark(seedStart, seedEnd, 'Seeding', set * batch))
        totalEnd = process.hrtime.bigint();
        console.log(getBenchmark(time, totalEnd, 'Total', set * batch))
    }
    const totalStart = process.hrtime.bigint();

    // nykeDb.collection('products').deleteMany()
    //     .then(() => seed(100, 10000, totalStart))
    //     .then(() => db.close())
    seed(100, 1000, totalStart)
        .then(() => db.close())
})