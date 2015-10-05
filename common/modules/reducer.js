import { combineReducers } from 'redux';
import counter from './counter';
import db from './db';
import form from './form';
import theme from './theme';

const rootReducer = combineReducers({
  counter,
  db,
  form,
  theme
});

export default rootReducer;
