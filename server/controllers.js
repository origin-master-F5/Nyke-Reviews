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
  // ,
  // post: (req, res, next) => {
  //   models.postProductsHelper(req.body)
  //     .then((data) => {
  //       res.status(200).send('Posted to Database')
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err)
  //     })
  // },
  // put: (req, res, next) => {
  //   models.updateProductHelper(req.params, req.body)
  //     .then((data) => {
  //       res.status(200).send('DB updated')
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err)
  //     })
  // },
  // delete: (req, res, next) => {
  //   models.deleteProductHelper(req.params)
  //     .then(() => {
  //       res.status(200).send('Item deleted from DB')
  //     })
  //     .catch(() => {
  //       res.status(500).send(err)
  //     })
  // }
}

module.exports = controllers;

