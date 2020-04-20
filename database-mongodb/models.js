// const { Product } = require('./index');
// const mongoose = require('mongoose');

// const db = require('../database-mongodb/index');

// const {ObjectId} = require('mongodb');


const models = {
    getOne: (id) => Product.find(id), //done

    changeVoteById: (ids, newUpvote, newDownvote) => { //done
        return Product.findOneAndUpdate(ids, {
            '$set': {
                'reviews.$.upvotes': newUpvote,
                'reviews.$.downvotes': newDownvote
            }
        });
    },

    incrementFlag: (ids, flagValue) => {
        return Product.findOneAndUpdate(ids, { //done
            '$set': {
                'reviews.$.flagged': flagValue
            }
        });
    },

    createReview: (id, review) => { //done
        return Product.findOne(id)
            .then((product) => {
                product.reviews.push(review);
                product.save();
            });
    },

    deleteReview: (parent, review) => { //done
        return Product.findOne(parent)
            .then((product) => {
                product.reviews.pull(review);
                product.save();
            });
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