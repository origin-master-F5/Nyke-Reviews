// const relic = require('newrelic')
const express = require('express');
// const router = require('./router.js');
const colors = require('colors');
const path = require('path');
const morgan = require('morgan');
const db = require('../database-mongodb/index');
const ObjectId = require('mongodb').ObjectId;
// const pool = require('../database-postgresql/index')

// db('get', "5e9be24966e7c809206509b8").then((data) => console.log(data.productId))

// console.log(db)
// db.collection('products').findOne({ "_id": ObjectId("5e9be24966e7c809206509b8") }).then((data) => console.log(data))
const app = express();
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client-react/dist')));

// app.use('/api/products/reviews', router);

app.listen(port, () => console.log(`SERVER ON @ ${port}!`.cyan));