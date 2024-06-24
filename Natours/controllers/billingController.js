const catchAsyncErrors = require('../utilities/catchAsyncErrors');
const billingModel = require('./../models/billingModel');
const factoryController = require('./factoryController');

exports.getUserBillings = catchAsyncErrors(async (req, res, next) => {
  console.log('this is user billing route');
  let billings = await billingModel
    .find()
    .populate({ path: 'booking', populate: { path: 'tour', select: 'name' } });

  res.status(200).json({
    status: 'success',
    data: {
      billings,
    },
  });
});

exports.getAllBillings = factoryController.getAll(billingModel);
exports.insertBilling = factoryController.createOne(billingModel);
exports.getBillingById = factoryController.getOne(billingModel);
exports.updateBilling = factoryController.updateOne(billingModel);
exports.deleteBilling = factoryController.deleteOne(billingModel);
