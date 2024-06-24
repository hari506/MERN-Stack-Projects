import axios from 'axios';
import Constants from '../constants';

export const AddTourToCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_TOUR',
      payload: {
        item,
      },
    });
  };
};

export const getBooking = (userId, callback) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(
        Constants.SERVER_URL + 'bookings/getUserBookings',
        {
          params: {
            userId: userId,
          },
        }
      );
      console.log(res.data);
      callback(res.data);
    } catch (err) {
      callback(err.response);
    }
  };
};

export const getUserReviews = (userId, callback) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(Constants.SERVER_URL + 'reviews/my-reviews', {
        params: {
          userId: userId,
        },
      });

      console.log(res);
      if (res.data.status === 'success') {
        callback(res.data);
      } else {
        callback({
          status: 'error',
          message: 'some thing went wrong',
        });
      }
    } catch (err) {
      console.log(err);
      callback({
        status: 'error',
        message: err.response.data.message,
      });
    }
  };
};

export const getUserBillings = (userId, callback) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(Constants.SERVER_URL + 'billing/my-billings', {
        params: {
          userId: userId,
        },
      });
      console.log('biiling respone', res);
      callback(res.data);
    } catch (err) {
      callback({
        status: 'error',
        message: err.response.data.message,
      });
    }
  };
};
