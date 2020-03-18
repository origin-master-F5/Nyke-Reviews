const mongoose = require('mongoose');
const productSchema = require('./schema')

mongoose.connect('mongodb://localhost/NykeReviews', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('DATABASE ON'.cyan)
});

var Product = mongoose.model('Product', productSchema);

module.exports.Product = Product
module.exports.db = db