import { combineReducers } from 'redux';

import locks from './locks';


const rootReducer = combineReducers({
  locks,
});

export default rootReducer;
