const pool = require('./index')

module.exports = {
    getOne: ({ productId }) => {
        console.log('LAST 10% OF DB')
        return pool.query(`SELECT * FROM reviews WHERE productid = ${productId}`)
    },
    changeVoteById: (id, upvote, downvote) => {
        id = id['reviews._id']
        return pool.query(`UPDATE reviews SET upvotes = ${upvote}, downvotes = ${downvote} WHERE productid = ${id}`)
    },
    incrementFlag: (id, flag) => {
        id = id['reviews._id']
        return pool.query(`UPDATE reviews SET flagged = ${flag} WHERE productid = ${id}`)
    },
    createReview: (id, { header, comment, star, size, comfort, durability, dateWritten, username, location, avgRunDistance, terrain, image }) => {
        return pool.query(`INSERT INTO reviews(header, comment, star, size, comfort, durability, dateWritten, username, location, avgRunDistance, terrain, image)VALUES(${header, comment, star, size, comfort, durability, dateWritten, username, location, avgRunDistance, terrain, image})WHERE productid = ${id}`)
    },
    deleteReview: (product, review) => {
            return pool.query(`DELETE * FROM reviews WHERE productid = ${review}`)
        } //deletes a row
}

// header, comment, star, size, comfort, durability, dateWritten, username, location, avgRunDistance, terrain, flagged, upvotes, downvotes, verified, image, productId