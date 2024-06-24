const express = require('express');
const userContorller = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get(
  '/account',
  authController.isLoggedIn,
  userContorller.setUserInfo,
  userContorller.getUserById
);
router.post('/forgotPassword', authController.forgotPassword);
router.post('/resetPassword/:token', authController.resetPassword);
router.patch(
  '/changePassword',
  authController.protect,
  authController.changePassword
);

router.get(
  '/get-user-by-token',
  authController.protect,
  userContorller.sendLoggedInUserDetails
);

router.route('/').get(userContorller.getAllUsers);
router
  .route('/:id')
  .get(userContorller.getUserById)
  .patch(
    authController.protect,
    userContorller.uploadUserPhoto,
    userContorller.updateMe
  )
  .delete(userContorller.deleteUser);

module.exports = router;
