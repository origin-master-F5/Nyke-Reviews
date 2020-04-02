const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router
    .route('/')
    .put(controllers.putVote)
    .post(controllers.postReview);

router
    .route('/flag')
    .put(controllers.putFlag);

router
    .route('/:id')
    .get(controllers.getOne);

// router
//   .route('/products/:_id')
//   .put(controller.put)
//   .delete(controller.delete)


module.exports = router;