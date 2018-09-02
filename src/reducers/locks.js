import { locksActions } from '../config/actionTypes';

const locksReducer = (state = [], action) => {
  switch (action.type) {
    case locksActions.VIEW_CURRENT_USER_LOCKS:
      return action.locks;

    default:
      return state;
  }
};

export default locksReducer;
