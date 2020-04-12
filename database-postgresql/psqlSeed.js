const pool = require('./index')
const { generateProducts, generateReviews } = require('./dataGenerator')
const colors = require('colors');
const moment = require('moment');
const faker = require('faker');
const fs = require('fs')
const filePath = '/Users/Darth Varg/Desktop/projects/nike/Nyke-Reviews/database-postgresql/'
const batch = 1000000;
const limit = 1000;
const productColumns = 'productName, productId, price, discountPrice, productImage'
const reviewColumns = 'header, comment, star, size, comfort, durability, dateWritten, username, location, avgRunDistance, terrain, flagged, upvotes, downvotes, verified, image, productId'



////////////////////////
/// Helper Functions ///
////////////////////////
const randomRange = (max, min) => {
    return Math.ceil(Math.random() * (max - min) + min);
};
const randomNum = (num) => {
    return Math.round(Math.random() * num);
};
const getBenchmark = (start, end, operation, batchNum) => {
    const bigNum = Number(end - start);
    const ms = bigNum / 1000000;
    const secs = (ms / 1000).toFixed(2);
    const mins = (secs / 60).toFixed(3);
    return `${operation} times: ${ms} (ms) / ${secs} (secs) / ${mins} (mins) for ${batchNum} products`;
};



const generateDataWriteAndSeed = () => {

    //////////////////////////////////
    /// write products to csv file ///
    //////////////////////////////////
    const productGenerateWriteAndSeed = (stream, batch, encoding, seed) => {
        let i = batch
        let newLine;
        let nikeId = 100;
        const write = () => {
            let ok = true
            do {
                i--;
                const shoe = {};
                shoe.productName = `Nike ${faker.commerce.productName()}`;
                shoe.productId = nikeId;
                nikeId++;
                shoe.price = Math.round(Math.random() * (250 - 150) + 150);
                shoe.discountPrice = Math.round(Math.random() * (149 - 100) + 100);
                const productImageArray = [
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg",
                    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg"
                ]
                shoe.productImage = productImageArray[randomNum(productImageArray.length - 1)];;
                newLine = Object.values(shoe);
                if (i === 0) {
                    stream.write((newLine.join(',') + '\n'), encoding, seed)
                } else {
                    ok = stream.write((newLine.join(',') + '\n'), encoding)
                }
            } while (i > 0 && ok);
            if (i > 0) {
                stream.once('drain', write)
            }
        }
        write()
    }

    ////////// BENCHMARKING \\\\\\\\\\
    const generateStart = process.hrtime.bigint();
    const generateProductStart = process.hrtime.bigint();
    //////// END BENCHMARKING \\\\\\\\


    const writeProductStream = fs.createWriteStream('database-postgresql/productData.csv');
    productGenerateWriteAndSeed(writeProductStream, batch, 'utf-8', async() => {
        writeProductStream.end()
            ////////// BENCHMARKING \\\\\\\\\\
        const generateProductEnd = process.hrtime.bigint();
        console.log(getBenchmark(generateProductStart, generateProductEnd, 'Product Data Gen/Writing', batch));
        //////// END BENCHMARKING \\\\\\\\

        const seedProductStart = process.hrtime.bigint();

        console.log('Products Seeding...'.yellow);
        await pool.query(`COPY products(${productColumns}) FROM '${filePath}productData.csv' DELIMITER ',';`);
        console.log('Seeded Products!'.green);

        const seedProductEnd = process.hrtime.bigint();
        console.log(getBenchmark(seedProductStart, seedProductEnd, 'Product Seeding', batch));
    })

    /////////////////////////////////
    /// write reviews to csv file ///
    /////////////////////////////////

    const reviewGenerateWriteAndSeed = (stream, batch, maxReviews, encoding, seed) => {
        let i = batch * maxReviews
        let newLine;
        const write = () => {
            let ok = true
            do {
                i--;
                const distanceArray = ['3 miles or fewer', '3 - 10 miles', 'More than 10 miles'];
                const terrainArray = ['Treadmill / Indoors', 'Road', 'Track'];
                const reviewImageArray = [
                    'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/B61E1B739A161975A92AB28D7D2B08A9.app1_1579613533843_PZ320.jpeg',
                    'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/315E0813E58EBBE72DF341004E24D952.app1_1583775393818_PZ320.jpeg',
                    'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/23C5CCC0349927EA9C4FE8077A77D7F0.app1_1574197116929_PZ320.jpeg',
                    'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/185FE1BC82FD4A16D691FE0F7B002BA9.app1_1571797784094_PZ320.jpeg',
                    'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/7CF33235BEB9D0121B480441AC61DBEB.app1_1574204929128_PZ320.jpeg',
                    'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/D9E4399A1F889304DC17A04FBCFD05DB.app1_1552241016796_PZ320.jpeg',
                    'https://wac.edgecastcdn.net/001A39/prod/media/78GDJmj4zEDYwwHsite/422D4488C25EA6FE6A2589A54361D842.app1_1524634291409-1_PZ320.jpeg'
                ];
                const review = {};
                review.header = `${faker.hacker.adjective()} ${faker.hacker.noun()} ${faker.hacker.ingverb()}${ok ? '.' : '!'}`;
                review.comment = faker.lorem.paragraph();
                review.star = randomRange(5, 1);
                review.size = randomNum(2);
                review.comfort = randomNum(2);
                review.durability = randomNum(2);
                const dateUnformatted = faker.date.past(1, '2020-04-01');
                review.dateWritten = moment(dateUnformatted).format('LL');
                review.username = faker.internet.userName();
                review.location = `${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.countryCode()}`;
                review.avgRunDistance = distanceArray[randomNum(distanceArray.length - 1)];
                review.terrain = terrainArray[randomNum(terrainArray.length - 1)];
                review.upvotes = randomNum(10);
                review.downvotes = randomNum(2);
                review.verified = Math.random() >= 0.8;
                review.productId = randomRange(100, batch)
                if (Math.random() >= 0.9) {
                    review.image = reviewImageArray[randomNum(reviewImageArray.length - 1)];
                } else {
                    review.image = ''
                }
                newLine = Object.values(review);
                if (i === 0) {
                    stream.write((newLine.join('+') + '\n'), encoding, seed)
                } else {
                    ok = stream.write((newLine.join('+') + '\n'), encoding)
                }
            } while (i > 0 && ok);
            if (i > 0) {
                stream.once('drain', write)
            }
        }
        write()
    }
    const writeReviewStream = fs.createWriteStream('database-postgresql/reviewData.csv');
    ////////// BENCHMARKING \\\\\\\\\\
    const generateReviewStart = process.hrtime.bigint();
    //////// END BENCHMARKING \\\\\\\\

    reviewGenerateWriteAndSeed(writeReviewStream, batch, 15, 'utf-8', async() => {
        writeReviewStream.end()

        ////////// BENCHMARKING \\\\\\\\\\
        const generateReviewEnd = process.hrtime.bigint();
        console.log(getBenchmark(generateReviewStart, generateReviewEnd, 'Review Data Gen/Writing', batch));
        const generateEnd = process.hrtime.bigint();
        console.log(getBenchmark(generateStart, generateEnd, 'Total Data Gen/Writing', batch));
        //////// END BENCHMARKING \\\\\\\\

        const seedReviewStart = process.hrtime.bigint();


        console.log('Reviews Seeding...'.yellow);
        await pool.query(`COPY reviews(${reviewColumns}) FROM '${filePath}reviewData.csv' DELIMITER '+';`);
        console.log('Seeded Reviews!'.green);

        const seedReviewEnd = process.hrtime.bigint();
        console.log(getBenchmark(seedReviewStart, seedReviewEnd, 'Review Seeding', batch));
        pool.end()

    })

}





// generateDataWriteAndSeed()



const productData = generateProducts(limit, batch)
const reviewData = generateReviews(limit, batch, 10)


const seedData = async(data, table, col, batch) => {
    let insertCount = 0;
    for (let group of data) {
        insertCount += group.length
        for (let i = 0; i < group.length; i++) {
            let vals = Object.values(group[i]).toString()
            try {
                await pool.query(
                    `INSERT INTO ${table}(${col})VALUES(${vals})`
                )
            } catch (err) {
                console.log(vals)
                console.error(`Insertion Error: ${err.message}`.red)
                return
            }
        }
        // if (insertCount >= batch * 10 .5) {
        //     console.log(`inserted so far: ${insertCount}`)
        // }
    }
}

const seedProductStart = process.hrtime.bigint();
console.log('Products Seeding...'.yellow)
seedData(productData, 'products', productColumns, batch)
    .then(() => {
        console.log('Products Seeded!'.green)
        const seedProductEnd = process.hrtime.bigint();
        console.log(getBenchmark(seedProductStart, seedProductEnd, 'Product Seed', batch));

        const seedReviewStart = process.hrtime.bigint();
        console.log('Reviews Seeding...'.yellow)
        seedData(reviewData, 'reviews', reviewColumns, batch)
            .then(() => {
                console.log('Reviews Seeded!'.green)
                const seedReviewEnd = process.hrtime.bigint();
                console.log(getBenchmark(seedReviewStart, seedReviewEnd, 'Review Seed', batch * 10));
                pool.end()
            })
    })


// const format = (arr) => {
//   let finalString = ''
//   for (let i = 0; i < arr.length; i++) {
//     let currString = Object.values(arr[i]).toString()
//     i === arr.length-1 ? finalString = finalString.concat(`(${currString})`) :
//     finalString = finalString.concat(`(${currString}),`)
//   }
//   return finalString
// }
// let input = [{
//   string1: `'test1'`,
//   num1: 1,
// },{
//   string2: 'test2',
//   num2: 2,
// },{
//   string3: 'test3',
//   num3: 3,
// },{
//   string4: 'test4',
//   num4: 4,
// },{
//   string5: 'test5',
//   num5: 5,
// },{
//   string6: 'test6',
//   num6: 6,
// }]