const express = require('express');
// const models = require('../database-mongodb/models');
const models = require('../database-postgresql/models'); //psql

const controllers = {
    getOne: (req, res) => {
        // res.send('recieved request')
        let productId = req.params.id;
        models.getOne({ productId })
            .then((data) => {
                // console.log('promise data ->', data)
                return res.status(200).send(data.rows)
            })
            .catch((err) => res.status(500).send(err));
    },

    putVote: (req, res) => {
        models.changeVoteById({ '_id': req.body.parentId, 'reviews._id': req.body.childId }, req.body.upvoteValue, req.body.downvoteValue)
            .then((data) => res.status(200).send('Posted to Database'))
            .catch((err) => res.status(500).send(err));
    },

    putFlag: (req, res) => {
        models.incrementFlag({ '_id': req.body.parentId, 'reviews._id': req.body.childId }, req.body.flagValue)
            .then((data) => res.status(200).send('Posted to Database'))
            .catch((err) => res.status(500).send(err));
    },

    postReview: (req, res) => {
        let _id = req.body.parentId;
        models.createReview({ _id }, req.body.aReview)
            .then((data) => res.status(200).send('Posted to Database'))
            .catch((err) => res.status(500).send(err));
    },

    deleteReview: (req, res) => {
        models.deleteReview({ '_id': req.body.parentId }, { '_id': req.body.childId })
            .then((data) => res.status(200).send('Deleted from Database'))
            .catch((err) => res.status(500).send(err));
    }
};

module.exports = controllers;