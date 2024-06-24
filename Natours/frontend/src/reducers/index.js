import { combineReducers } from 'redux';
import AuthReducer from './authReducer';

let MainReducer = (state = { items: [], totalItems: 0 }, action) => {
  let { payload, type } = action;
  switch (type) {
    case 'ADD_TOUR':
      if (payload.item) {
        state.items.push(payload.item);
      }

      break;

    default:
      return state;
  }
};

export default combineReducers({
  auth: AuthReducer,
  cart: MainReducer,
});
