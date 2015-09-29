export const UPDATE_FIELD = 'UPDATE_FIELD';

export function updateField(id, value) {
  return {
    type: UPDATE_FIELD,
    payload: {id, value}
  };
}
