import { UPDATE_TITLE } from '../actions/head';

export default function head(state = {}, action) {
  switch (action.type) {
  case UPDATE_TITLE:
    return {...state, title: action.payload};
  default:
    return state;
  }
}
