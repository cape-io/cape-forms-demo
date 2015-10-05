const UPDATE_FIELD = 'form/UPDATE_FIELD';
const SET_EDITING = 'form/SET_EDITING';

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

// Update a field by id.
export function updateField(id, value) {
  return {
    type: UPDATE_FIELD,
    payload: {id, value}
  };
}

// Set the field that we are currently editing.
export function setEditing(id) {
  return {
    type: SET_EDITING,
    payload: id
  };
}
