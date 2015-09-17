import React, { Component, PropTypes } from 'react';

import validateEmail from './validateEmail';
import Text from './Text';

// A text input with default prop values and some validation.

export default class Email extends Component {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    onValidChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    help: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string
  }

  static defaultProps = {
    apiKey: 'pubkey-1j0fplia8gwp3t6ibvr20t325us652y5',
    errorMessage: 'Invalid email. Please check and try again.',
    help: 'Your email address please.',
    id: 'email',
    label: 'Email',
    name: 'email',
    placeholder: 'you@domain.com'
  }

  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      suggestion: '',
      help: '',
      value: props.defaultValue
    };
  }

  componentDidMount() {
    const {apiKey, defaultValue} = this.props;
    validateEmail(apiKey, defaultValue, (res) => this.handleValidateResult(res));
  }

  handleValidateResult(result) {
    const {onValidChange} = this.props
    const {hasErrors} = result
    console.log(result);
    if (!hasErrors) {
      onValidChange(result.value);
    }
    if (result.value === this.state.value) {
      this.setState(result);
    }
    else {
      console.log(result.value, this.state.value);
    }
  }

  render() {
    const {apiKey, onChange, onValidChange, defaultValue, help, errorMessage, ...other} = this.props;
    const {value, hasErrors, suggestion, breakPoint} = this.state;
    const extraHelp = this.state.help;
    const errorIsHelp = breakPoint === 'help';

    let helpTxt = hasErrors ? errorMessage : help;
    if (extraHelp) {
      helpTxt += ' ' + extraHelp;
    }
    const handleChange = (newValue) => {
      const initResult = validateEmail(apiKey, newValue, this.handleValidateResult.bind(this));
      this.setState(initResult);
      if (initResult.breakPoint === 'cache' && !initResult.hasErrors) {
        onValidChange(newValue);
      }
    }
    // return createElement(Text, this.props);
    return (
      <Text
        {...other}
        onChange={handleChange}
        type="email"
        value={value}
        hasErrors={errorIsHelp ? false : hasErrors}
        help={helpTxt}
        suggestion={suggestion}
      />
    );
  }
}
