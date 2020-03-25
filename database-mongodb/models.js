const Product = require('./index').Product
const mongoose = require('mongoose')

const models = {
  getAll: () => {
    return Product.find({})
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
    // console.log('req body', req.body)
    return Product.findOne({ _id: _id }).then(function (product) {
      //modify and save the object received via callback
      product.reviews.push(aReview);
      product.save();
    });
    // return Product.reviews.push({ reviews: aReview })
  }
}

module.exports = models
