const catchAsyncErrors = require('../utilities/catchAsyncErrors');
const bookingModel = require('./../models/bookingModel');
const factoryController = require('./factoryController');

exports.setUserInfo = (req, res, next) => {
  if (req.locals.user) {
    req.query.user = req.locals.user.id;
  }

  if (req.body.tour) {
    req.query.tour = req.body.tour;
  }

  next();
};

exports.getUserBookings = catchAsyncErrors(async (req, res, next) => {
  console.log('this is bookig route 18', req.query);
  let userBookings = await bookingModel
    .find({ user: req.query.userId })
    .populate({ path: 'tour', select: 'name' });

  res.status(200).json({
    status: 'success',
    data: {
      bookings: userBookings,
    },
  });
});
exports.getAllBookings = factoryController.getAll(bookingModel);
exports.insertBooking = factoryController.createOne(bookingModel);
exports.getBookingById = factoryController.getOne(bookingModel, {
  path: 'user',
});
exports.updateBooking = factoryController.updateOne(bookingModel);
exports.deleteBooking = factoryController.deleteOne(bookingModel);
