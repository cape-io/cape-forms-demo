import { UPDATE_FIELD, SET_EDITING } from '../actions/form';

const defaults = {
  editing: null,
  fields: [],
  title: 'Form',
  help: 'Click to edit',
  values: {}
}

export default function form(state = defaults, action) {
  switch (action.type) {
  case UPDATE_FIELD:
    const newValues = {values: state.values};
    newValues.values[action.payload.id] = action.payload.value;
    return {...state, ...newValues};
  case SET_EDITING:
    return {...state, editing: action.payload}
  default:
    return state;
  }
}
