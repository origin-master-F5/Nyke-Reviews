const express = require('express');
const models = require('../database-mongodb/models'); // mongo
// const models = require('../database-postgresql/models'); //psql

const controllers = {
    getOne: (req, res) => {
        let productId = Number(req.params.id);
        models.getOne({ productId })
            .then((data) => res.status(200).send(data))
            .catch((err) => res.status(500).send(err));
    },

    putVote: (req, res) => {
        // console.log('data ->', req.body)
        models.changeVoteById({ '_id': req.body.parentId, 'reviews._id': req.body.childId }, req.body.upvoteValue, req.body.downvoteValue)
            .then((data) => res.status(200).send('Updated votes'))
            .catch((err) => res.status(500).send(err));
    },

    putFlag: (req, res) => {
        models.incrementFlag({ '_id': req.body.parentId, 'reviews._id': req.body.childId }, req.body.flagValue)
            .then((data) => res.status(200).send('Updated flag'))
            .catch((err) => res.status(500).send(err));
    },

    postReview: (req, res) => {
        let _id = req.body.parentId;
        models.createReview({ _id }, req.body.aReview)
            .then((data) => res.status(200).send('Posted new review to Database'))
            .catch((err) => res.status(500).send(err));
    },

    deleteReview: (req, res) => {
        models.deleteReview({ '_id': req.body.parentId }, { '_id': req.body.childId })
            .then((data) => res.status(200).send('Deleted from Database'))
            .catch((err) => res.status(500).send(err));
    }
};

module.exports = controllers;