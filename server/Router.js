const express = require('express')
const router = express.Router()
const controllers = require('./controllers')

router
  .route('/products/reviews')
  .get(controllers.getAll)


module.exports = router

