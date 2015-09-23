import { combineReducers } from 'redux';

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions';

const counter = function(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
}


const rootReducer = combineReducers({
  counter
});

export default rootReducer;
