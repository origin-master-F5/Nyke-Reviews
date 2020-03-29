const Product = require('./index').Product
const mongoose = require('mongoose')

const models = {
  getOne: (req) => {
    let productId = req.params.id
    console.log('params on models', req.params)
    return Product.find({ productId })
  },
  changeVoteById: (req) => {
    let parentId = req.body.parentId
    let childId = req.body.childId
    let newUpvote = req.body.upvoteValue
    let newDownvote = req.body.downvoteValue
    return Product.findOneAndUpdate(
      { "_id": parentId, "reviews._id": childId },
      {
        "$set": {
          "reviews.$.upvotes": newUpvote, "reviews.$.downvotes": newDownvote
        }
      }
    )
  },
  incrementFlag: (req) => {
    let parentId = req.body.parentId
    let childId = req.body.childId
    let flagValue = req.body.flagValue

    return Product.findOneAndUpdate(
      { "_id": parentId, "reviews._id": childId },
      {
        "$set": {
          "reviews.$.flagged": flagValue
        }
      }
    )
  },
  createReview: (req) => {
    let _id = req.body.parentId
    let aReview = req.body.aReview

    return Product.findOne({ _id: _id }).then(function (product) {
      product.reviews.push(aReview);
      product.save();
    });
  }
}

module.exports = models
