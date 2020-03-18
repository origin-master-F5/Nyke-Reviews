const Product = require('./index').Product
const mongoose = require('mongoose')

const models = {
  getAll: () => {
    return Product.find({})
  }
}

module.exports = models
