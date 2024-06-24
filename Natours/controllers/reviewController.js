let catchAsyncErrors = require('./../utilities/catchAsyncErrors');
let AppErrorHandler = require('./../utilities/AppErrorHandler');
let reviewModel = require('./../models/reviewModel');
const factoryController = require('./factoryController');
const { populate } = require('../models/usersModel');

exports.setTourAndUserInfo = (req, res, next) => {
  if (!req.body.tourId) {
    req.query.tour = req.params.tourId;
  }

  if (!req.body.userId && req.user) {
    req.query.userId = req.user.id;
  }

  next();
};

exports.getUserReviews = catchAsyncErrors(async (req, res, next) => {
  let reviews = await reviewModel
    .find({ user: req.query.userId })
    .populate({ path: 'tour', select: 'name' });
  res.status(200).json({
    status: 'success',
    data: {
      reviews,
    },
  });
});

exports.getAllReview = factoryController.getAll(reviewModel);
exports.deleteReview = factoryController.deleteOne(reviewModel);
exports.updateReview = factoryController.updateOne(reviewModel);
exports.createReview = factoryController.createOne(reviewModel);
exports.getReview = factoryController.getOne(reviewModel);
