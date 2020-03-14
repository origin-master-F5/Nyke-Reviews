const Product = require('./index')
const mongoose = require('mongoose')

const models = {

}

module.exports = models

// var helpers = {
//   getProductsHelper: () => {
//     return Product.find({})
//   },
//   postProductsHelper: ({ item, min_cost, curr_bid, ends_in, image }) => {
//     return Product.create({ item, min_cost, curr_bid, ends_in, image })
//   },
//   updateProductHelper: ({ _id }, { item, min_cost, curr_bid, ends_in, image }) => {
//     return Product.findByIdAndUpdate({ _id }, { item, min_cost, curr_bid, ends_in, image })
//   },
//   deleteProductHelper: ({ _id }) => {
//     return Product.findByIdAndRemove({ _id })
//   }
// };