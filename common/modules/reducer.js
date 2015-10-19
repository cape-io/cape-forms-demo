import { combineReducers } from 'redux';
import auth from './auth';
import counter from './counter';
import db from './db';
import form from './form';
import theme from './theme';

const rootReducer = combineReducers({
  auth,
  counter,
  db,
  form,
  theme
});

export default rootReducer;
