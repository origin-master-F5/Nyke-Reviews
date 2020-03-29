const express = require('express')
const models = require('../database-mongodb/models')

const controllers = {
  getOne: (req, res, next) => {
    models.getOne(req)
      .then((data) => {
        // console.log(data)
        res.status(200).send(data)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  putVote: (req, res, next) => {
    models.changeVoteById(req)
      .then((data) => {
        res.status(200).send('Posted to Database')
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  putFlag: (req, res, next) => {
    models.incrementFlag(req)
      .then((data) => {
        res.status(200).send('Posted to Database')
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  },
  postReview: (req, res, next) => {
    // console.log('working in controllers')
    models.createReview(req)
      .then((data) => {
        res.status(200).send('Posted to Database')
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }
}

module.exports = controllers;

