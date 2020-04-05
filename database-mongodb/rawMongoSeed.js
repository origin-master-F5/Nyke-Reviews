const generateData = require('./rawMongoSeed').generateData;
const getBenchmark = require('./rawMongoSeed').getBenchmark;
const db = require('./index.js').db;

const totalStart = process.hrtime.bigint();

async function seed(set, batch, time) {

    let insertCount = 0
    for (let products of generateData(set, batch)) {
        insertCount += products.length;
        //  await Product.insertMany(products)
        await db.collection('products').insertMany(products)
        console.log(`inserted so far: ${insertCount}`)
    }
    totalEnd = process.hrtime.bigint();
    console.log(getBenchmark(time, totalEnd, 'Total', set * batch))
}
seed(100, 1000, totalStart)
    .then(() => db.close())