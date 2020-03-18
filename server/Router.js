const express = require('express')
const router = express.Router()
const controllers = require('./controllers')

router
  .route('/products/reviews')
  .get(controllers.getAll)
//   .post(controller.post)

// router
//   .route('/products/:_id')
//   .put(controller.put)
//   .delete(controller.delete)


module.exports = router

