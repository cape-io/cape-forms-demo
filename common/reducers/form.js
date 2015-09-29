import { UPDATE_FIELD } from '../actions/form';

export default function form(state = {}, action) {
  switch (action.type) {
  case UPDATE_FIELD:
    const fieldUpdate = {};
    fieldUpdate[action.payload.id] = action.payload.value;
    return {...state, ...fieldUpdate};
  default:
    return state;
  }
}
