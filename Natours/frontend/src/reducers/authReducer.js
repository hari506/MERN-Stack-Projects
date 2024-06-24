let AuthReducer = (state = {}, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'SIGNUP': {
      return payload;
    }

    case 'LOGIN': {
      return payload;
    }

    case 'UPDATE_USER': {
      return payload;
    }

    case 'LOGOUT': {
      return {};
    }

    default: {
      return state;
    }
  }
};

export default AuthReducer;
