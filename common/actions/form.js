export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SET_EDITING = 'SET_EDITING';

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
