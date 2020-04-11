const Product = require('./index').Product;
const mongoose = require('mongoose');

const models = {
  getOne: (id) => Product.find(id),

  changeVoteById: (ids, newUpvote, newDownvote) => {
    return Product.findOneAndUpdate(ids, {
      '$set': {
        'reviews.$.upvotes': newUpvote,
        'reviews.$.downvotes': newDownvote
      }
    });
  },

  incrementFlag: (ids, flagValue) => {
    return Product.findOneAndUpdate(ids, {
      '$set': {
        'reviews.$.flagged': flagValue
      }
    });
  },

  createReview: (id, review) => {
    return Product.findOne(id)
      .then((product) => {
        product.reviews.push(review);
        product.save();
      });
  },

  deleteReview: (parent, review) => {
    return Product.findOne(parent)
      .then((product) => {
        product.reviews.pull(review);
        product.save();
      });
  }
};

module.exports = models;