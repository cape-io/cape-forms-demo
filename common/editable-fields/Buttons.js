import React, { Component, PropTypes } from 'react';
import Icon from './Icon';

class EditableButtons extends Component {

  render() {
    const {onSubmit, onClose, disabled} = this.props;

    return (
      <div className="editable-buttons">
        <button
          className="btn btn-sm editable-submit"
          disabled={disabled}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <Icon symbol="ok" />
        </button>
        <button
          className="btn btn-sm editable-close"
          type="button"
          onClick={onClose}
        >
          <Icon symbol="ban-circle" />
        </button>
      </div>
    );
  }
};
EditableButtons.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default EditableButtons;
