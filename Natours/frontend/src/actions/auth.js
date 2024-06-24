import axios from 'axios';
import Constants from '../constants';

export const loginAction = (formData, callback) => {
  return async (dispatch) => {
    try {
      let res = await axios.post(
        Constants.SERVER_URL + 'users/login',
        formData
      );
      if (res.data.token) {
        dispatch({
          type: 'LOGIN',
          payload: {
            token: res.data.token,
            user: res.data.data.user,
          },
        });

        localStorage.setItem('token', res.data.token);
        callback({
          status: 'success',
        });
      } else {
        callback({
          status: 'error',
          message: 'Some thing went wrong, please try again after some time',
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

export const LogOutAction = () => {
  return (dispatch) => {
    localStorage.setItem('token', '');
    dispatch({
      type: 'LOGOUT',
    });
  };
};

export const GetUserByToken = () => {
  return async (dispatch) => {
    let token = localStorage.getItem('token');
    if (token) {
      try {
        let res = await axios.get(
          Constants.SERVER_URL + 'users/get-user-by-token',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        dispatch({
          type: 'LOGIN',
          payload: {
            token: token,
            user: res.data.data.user,
          },
        });
      } catch (err) {
        console.log(err.response);
      }
    }
  };
};

export const UpdateUserDetails = (userDetails, callback) => {
  return async (dispatch) => {
    try {
      let token = localStorage.getItem('token');
      let res = await axios.patch(
        Constants.SERVER_URL + `users/${userDetails.id}`,
        {
          name: userDetails.name,
          email: userDetails.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({
        type: 'UPDATE_USER',
        payload: {
          token: token,
          user: res.data.data.user,
        },
      });

      console.log(res);
      callback(res.data.data);
    } catch (err) {
      callback({
        status: 'error',
        message: err.response.data.message,
      });
    }
  };
};

export const changePassword = (passwordsObj, callback) => {
  return async (dispatch) => {
    try {
      let res = await axios.patch(
        Constants.SERVER_URL + 'users/changePassword',
        {
          ...passwordsObj,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log(res);
      callback(res.data);
    } catch (err) {
      callback({
        status: 'error',
        message: 'some thing went wrong',
      });
    }
  };
};
