const express = require('express')
const router = express.Router()
const controllers = require('./controllers')

router
  .route('/products/reviews')

  .put(controllers.putVote)
  .post(controllers.postReview)

router
  .route('/products/reviews/flag')
  .put(controllers.putFlag)

router
  .route('/products/reviews/:id')
  .get(controllers.getOne)

// router
//   .route('/products/:_id')
//   .put(controller.put)
//   .delete(controller.delete)


module.exports = router

