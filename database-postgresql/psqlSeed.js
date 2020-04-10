// const pool = require('./index')
const fs = require('fs')
const { generateProducts, generateReviews } = require('./dataGenerator')
const batch = 10000;
const limit = 1000;

const getBenchmark = (start, end, operation, batchNum) => {
    const bigNum = Number(end - start);
    const ms = bigNum / 1000000;
    const secs = (ms / 1000).toFixed(2);
    const mins = (secs / 60).toFixed(3);
    return `${operation} times: ${ms} (ms) / ${secs} (secs) / ${mins} (mins) for ${batchNum} products`;
};



const seedProducts = async(arr) => {
    let writeProductStream = fs.createWriteStream('database-postgresql/productData.csv');
    let writeReviewStream = fs.createWriteStream('database-postgresql/reviewData.csv');

    ////////////////////////////////////////
    /// create product and review arrays ///
    ////////////////////////////////////////
    const generateStart = process.hrtime.bigint();
    const generateProductStart = process.hrtime.bigint();
    const products = await generateProducts(limit, batch);
    const generateProductEnd = process.hrtime.bigint();
    const productGenTime = getBenchmark(generateProductStart, generateProductEnd, 'Product Data Generation', batch);

    const generateReviewStart = process.hrtime.bigint();
    const reviews = await generateReviews(limit, batch, 15);
    const generateReviewEnd = process.hrtime.bigint();
    const reviewGenTime = getBenchmark(generateReviewStart, generateReviewEnd, 'Review Data Generation', batch);

    const generateEnd = process.hrtime.bigint();
    const dataGenTime = getBenchmark(generateStart, generateEnd, 'Total Data Generation', batch);

    //////////////////////////////////
    /// write products to csv file ///
    //////////////////////////////////
    const writeStart = process.hrtime.bigint();
    const writeProductStart = process.hrtime.bigint();
    for (let group of products) {
        group.forEach(async(obj) => {
            let newLine = Object.values(obj);
            await writeProductStream.write(newLine.join(',') + '\n')
        })
    }
    writeProductStream.end()
    writeProductStream
        .on('finish', () => console.log(getBenchmark(writeProductStart, process.hrtime.bigint(), 'Product Data Writing', batch)))
        .on('error', (err) => console.log(err))

    /////////////////////////////////
    /// write reviews to csv file ///
    /////////////////////////////////
    const writeReviewStart = process.hrtime.bigint();
    for (let group of reviews) {
        group.forEach(async(obj) => {
            let newLine = Object.values(obj);
            await writeReviewStream.write(newLine.join(',') + '\n')
        })
    }
    writeReviewStream.end()
    writeReviewStream
        .on('finish', () => console.log(getBenchmark(writeReviewStart, process.hrtime.bigint(), 'Review Data Writing', batch)))
        .on('error', (err) => console.log(err))
        // console.log(dataGenTime)


    // await pool.query("INSERT INTO products (productName, productId, price, discountPrice, productImage) VALUES ($1)", [...Object.keys(ex)], (err, result) => {
    //     err ? console.error(err) : console.log('success!', result)
    // })


}

seedProducts()