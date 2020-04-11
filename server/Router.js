const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router
  .route('/')
  .put(controllers.putVote)
  .post(controllers.postReview)
  .delete(controllers.deleteReview);

router
  .route('/flag')
  .put(controllers.putFlag);

router
  .route('/:id')
  .get(controllers.getOne);

module.exports = router;