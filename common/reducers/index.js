import { combineReducers } from 'redux';
import counter from './counter';
import form from './form';
import head from './head';

const rootReducer = combineReducers({
  counter,
  form,
  head
});

export default rootReducer;
