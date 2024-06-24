const express = require('express');
const reviewController = require('./../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.get('/my-reviews', reviewController.getUserReviews);
router
  .route('/')
  .get(reviewController.setTourAndUserInfo, reviewController.getAllReview)
  .post(reviewController.createReview);

router.route('/:id').get(reviewController.getReview);

module.exports = router;
