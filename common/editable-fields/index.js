import React, { Component, PropTypes, createElement } from 'react';
import classNames from 'classnames';

import FormGroup from './FormGroup';
import PreviewText from './PreviewText';
import EditField from './EditField';

const validateName = function(val) {
  const valParts = val.split(' ');
  if (valParts.length > 1 && valParts[0].length > 1 && valParts[valParts.length - 1].length > 1 && valParts.length < 5) {
    return false;
  }
  return true;
};

const typeDefaults = {
  email: {
    errorMessage: 'Invalid email. Please check and try again.',
    help: 'Your email address please.',
    id: 'email',
    label: 'Email',
    placeholder: 'you@domain.com'
  },
  fullName: {
    id: 'name',
    label: 'Full Name',
    errorMessage: 'Please use your full name.',
    validate: validateName
  },
  dateTime: {
    label: 'Date & Time'
  }
};

class EditableField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      status: null
    };
  }
  toggleEditing(editing) {
    if (editing) {
      this.setState({editing});
    }
    else {
      this.setState({editing, status: null});
    }
  }
  handleValidation(status) {
    if (status !== this.state.status) {
      this.setState({status});
    }
  }

  render() {
    const type = this.props.type;
    // Combine props over defaults.
    const props = {...typeDefaults[type], ...this.props};
    const {label, onSubmit, ...other} = props;
    const {editable, id, name, required} = other;
    const {editing, status} = this.state;

    let valueEl = false;

    if (editing) {
      valueEl =
        <EditField
          {...other}
          onSubmit={(v) => {
            this.toggleEditing(false);
            onSubmit(v);
          }}
          onClose={() => {this.toggleEditing(false)}}
          onValidation={this.handleValidation.bind(this)}
        />
    }
    else {
      valueEl =
        <PreviewText
            {...other}
            onClick={() => {this.toggleEditing(true)}}
        />
    }

    return (
      <form className="editable-form form-horizontal" onSubmit={(e) => {e.preventDefault(e)}}>
        <FormGroup id={id} label={label} editable={editable} required={required} status={status}>
          {valueEl}
        </FormGroup>
      </form>
    );
  }
}
EditableField.defaultProps = {
  editable: true,
  type: 'text'
}
EditableField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf([
      'email',
      'dateTime',
      'fullName',
      'text'
    ]).isRequired,
  editable: PropTypes.bool,
  value: PropTypes.string
}
export default EditableField
