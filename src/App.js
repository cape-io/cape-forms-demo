import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

import EditableField from './EditableField'
import DateTimeField from 'react-bootstrap-datetimepicker'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.interval = setInterval(() => this.tick(), 2000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {color, increment} = this.props
    const {counter} = this.state

    return (
      <h1 style={{ color: color }}>
        Counter ({increment}): {counter}
      </h1>
    );
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'email',
      value: 'kai@kaicurry.com'
    };
  }

  handleInput(name, value) {
    console.log(name, value);
    this.setState({
      name: name,
      value: value
    });
  }

  render() {
    const {name, value} = this.state;
    const txt = `{${name || ''}: "${value || ''}"}`
    return (
      <div className="section">
        <Counter increment={3} color={NICE} />
        <Counter increment={2} color={SUPER_NICE} />
        <div className="row">
          <div className="col-md-6">
            <div>{txt}</div>
            <EditableField
              type="email"
              onSubmit={(value) => this.handleInput('email', value)}
              defaultValue={value}
              required={true}
            />

          </div>
        </div>
      </div>
    );
  }
}
