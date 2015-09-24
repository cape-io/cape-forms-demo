import React, { Component, PropTypes } from 'react';

// Simple wrapper around an input field.
// 1. Checks for changes every 300ms. Useful for safari autocomplete.
// 2. Also has a clear button that changes input value to empty string.

export default class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    // Needed in place of refs.
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string
  }

  constructor(props) {
    super(props);
    // When initialized trigger the tick function every interval.
    this.interval = setInterval(() => this.tick(), 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Only update when the props value changes.
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  }

  // The value has changed. Do stuff.
  changeValue(newValue) {
    const {value, onChange} = this.props;
    // When it's a new value send it to parent.
    if (newValue !== value) {
      onChange(newValue);
    }
  }

  // Extract new value from change event.
  handleChange(e) {
    const newValue = e.target.value;
    // Pass it along.
    this.changeValue(newValue);
  }

  // The function that is called every interval.
  tick() {
    const {id} = this.props;
    // Get the form field value. Not using refs so it's usable with Redux...
    // const fieldVal = this.refs[id].getDOMNode().value;
    const fieldVal = document.getElementById(id).value
    // If the field has a value send it off.
    if (fieldVal) {
      this.changeValue(fieldVal);
    }
  }
  clearInputValue() {
    console.log('clear');
    this.changeValue('');
  }
  render() {
    const {id, onChange, value, ...other} = this.props;
    let clearEl = false
    if (value) {
      clearEl =
        <button
          type="button"
          title="Clear input value"
          className="input-clear-x btn btn-default btn-xs"
          onClick={this.clearInputValue.bind(this)}
        > x </button>
    }

    return (
      <div className="editable-input">
        <input
          {...other}
          autoFocus
          aria-describedby={`${id}-helpBlock`}
          onChange={e => this.handleChange(e)}
          onBlur={e => this.handleChange(e)}
          id={id}
        />
        {clearEl}
      </div>
    );
  }
}
