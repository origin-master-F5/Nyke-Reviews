const mongoose = require('mongoose');
const productSchema = require('./schema');
const colors = require('colors');
const localhost = '127.0.0.1'
const ec2Mongo = '54.183.153.156'
const { ObjectId } = require('mongodb');


const { MongoClient } = require('mongodb');

const url = `mongodb://${localhost}`


module.exports = async(method, queryObj) => {

    let options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        let connection = await MongoClient.connect(url, options);
        let db = connection.db('NykeReviews').collection('products');

        if (method === 'seed') {
            return await db.insertMany(queryObj)
        } else if (method === 'get') {
            // console.log('searching', queryObj)
            return await db.findOne({ _id: ObjectId(queryObj) })
        } else if (method === 'post') {
            return await db.create({ query })
        } else if (method === 'delete') {
            return await db.deleteOne({ nikeID: Number(queryObj) })
        }

    } catch (err) {
        console.log('error connecting to mongo', err)
    }
}



// MongoClient.connect(url, {
//     useUnifiedTopology: true
// }, (err, client) => {
//     if (err) {
//         console.error(err)
//     }
//     console.log('Connected to MongoDB'.cyan)
//     module.exports = client.db('NykeReviews')
//         // module.exports = db

// })



// mongoose.connect(`mongodb://${localhost}/NykeReviews`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('DATABASE ON'.cyan);
// });

// var Product = mongoose.model('Product', productSchema);

// module.exports = {
//     Product: Product,
//     db: db
// };