const express = require('express')
const models = require('../database-mongodb/models')

const controllers = {
  getAll: (req, res, next) => {
    models.getAll()
      .then((data) => {
        res.status(200).send(data)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }
}

module.exports = controllers;

