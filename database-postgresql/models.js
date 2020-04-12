const pool = require('./index')

module.exports = {
    getOne: () => {}, //get one id and return all of it's reviews,
    changeVoteById: () => {}, //finds a review and changes upvote count and downvote
    incrementFlag: () => {}, //add 1 to flag,
    createReview: () => {}, //will insert a new row to reviews
    deleteReview: () => {} //deletes a row
}