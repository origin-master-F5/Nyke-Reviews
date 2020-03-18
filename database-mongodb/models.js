const Product = require('./index').Product
const mongoose = require('mongoose')

const models = {
  getAll: () => {
    return Product.find({})
  }

  // ,
  // postOne: ({ item, min_cost, curr_bid, ends_in, image }) => {
  //   return Product.create({ item, min_cost, curr_bid, ends_in, image })
  // }

  // ,
  // updateOne: ({ _id }, { item, min_cost, curr_bid, ends_in, image }) => {
  //   return Product.findByIdAndUpdate({ _id }, { item, min_cost, curr_bid, ends_in, image })
  // },
  // deleteOne: ({ _id }) => {
  //   return Product.findByIdAndRemove({ _id })
  // }
}

module.exports = models
