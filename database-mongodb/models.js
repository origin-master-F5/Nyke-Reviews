// const { Product } = require('./index');
// const mongoose = require('mongoose');
const { product } = require('./index');

const models = {
    getOne: (id) => product.findOne(id),

    changeVoteById: (ids, newUpvote, newDownvote) => {
        return product.findOneAndUpdate(ids, {
            '$set': {
                'reviews.$.upvotes': newUpvote,
                'reviews.$.downvotes': newDownvote
            }
        });
    },

    incrementFlag: (ids, flagValue) => {
        return product.findOneAndUpdate(ids, {
            '$set': {
                'reviews.$.flagged': flagValue
            }
        });
    },

    createReview: (id, review) => {
        return product.findOneAndUpdate(id, {
            '$push': { "reviews": review }
        })
    },

    deleteReview: (parent, review) => {
        return product.update(id, {
            '$pull': { reviews: review }
        })
    }
};

module.exports = models;

// will likely need to write db.collection('products') to queries

//product get request
// db.products.find(id)
//--------------------//

//change vote
// db.products.update(
// {_id: _id, reviews._id: _id}, {
//   '$set': {
//       'reviews.$.upvotes': newUpvote,
//       'reviews.$.downvotes': newDownvote
//   }
// }
//--------------------//

//update flag
// db.products.update(
// {_id: _id, reviews._id: _id}, {
//   '$set': {
//       'reviews.$.flagged': flagValue
//   }
// }
//--------------------//

//for pushing a new review to reviews array
// db.products.update(
//   { _id: 1 },
//   { $push: { reviews: {} } }
// )
//--------------------//

//delete one review
// db.products.update(
//   { _id: 1 },
//   { $pull: { reviews: {_id} } }
// )