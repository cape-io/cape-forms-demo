import React, { Component, PropTypes, createElement } from 'react';

import FormGroup from './FormGroup';
import Input from './Input';
import Icon from './Icon';
import Help from './Help';

class Text extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    hasErrors: PropTypes.bool,
    help: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    value: '',
    hasErrors: false
  }

  render() {
    const {name, label, hasErrors, help, suggestion, onChange, id, ...other} = this.props;

    return (
      <FormGroup id={id} label={label} htmlFor={name} hasErrors={hasErrors}>
        <Input
          {...other}
          name={name}
          onChange={onChange}
          className="form-control"
        />
        {help ? createElement(Help, {help, hasErrors, suggestion, onChange}) : false}
      </FormGroup>
    );
  }
}


export default Text;
