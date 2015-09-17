import React, { Component, PropTypes, createElement } from 'react';
import classNames from 'classNames'

import DateTimeField from 'react-bootstrap-datetimepicker'

import FormGroup from './FormGroup';
import PreviewText from './PreviewText'
import EditField from './EditField';

const typeDefaults = {
  email: {
    errorMessage: 'Invalid email. Please check and try again.',
    help: 'Your email address please.',
    id: 'email',
    label: 'Email',
    placeholder: 'you@domain.com'
  },
  datetime: {
    label: 'Date & Time'
  }
};

export default class EditableField extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.oneOf([
        'email',
        'datetime',
        'text'
      ]).isRequired,
    editable: PropTypes.bool,
    value: PropTypes.string
  }
  static defaultProps = {
    editable: true,
    type: 'text'
  }
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
    const {editable, label, onSubmit, ...other} = props;
    const {id, name, required} = other;
    const {editing, status} = this.state;

    let valueEl = false;

    if (editing) {
      switch (type) {
        case 'datetime':
          valueEl = <DateTimeField />
          break;
        default:
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

    }
    else {
      valueEl =
        <PreviewText
            {...other}
            onClick={() => {this.toggleEditing(true)}}
        />
    }

    return (
      <form className="editable-form" onSubmit={(e) => {e.preventDefault(e)}}>
        <FormGroup id={id} label={label} editable={editable} required={required} status={status}>
          {valueEl}
        </FormGroup>
      </form>
    );
  }
}
