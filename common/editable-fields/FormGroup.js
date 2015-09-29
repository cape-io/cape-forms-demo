import React, { Component, PropTypes } from 'react';

import classNames from 'classnames'

// Editable formGroup.

class FormGroup extends Component {
  render() {
    const {label, status, id, required, children, editable, className} = this.props;
    const cssClasses = {
      editable,
      'form-group': true,
      'has-error': (status === 'error'),
      'has-success': (status === 'success'),
      'has-warning': (status === 'warning'),
      'has-feedback': status
    };
    let labelEl = false;
    if (label) {
      labelEl = <label className="control-label col-md-3" htmlFor={id}>
        {label}
        {required ? '*' : false}
      </label>
    }

    return (
      <div className={classNames(cssClasses, className)} id={`${id}-group`}>
        {labelEl}
        {children}
      </div>
    );
  }
}

FormGroup.propTypes = {
  label: PropTypes.string,
  hasErrors: PropTypes.bool,
  required: PropTypes.bool
};

FormGroup.defaultProps = {
  hasErrors: false
};

export default FormGroup;
