import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

import SampleForm from './SampleForm'

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

  render() {
    return (
      <div className="wrapper">
        <header>
          <Counter increment={2} color={SUPER_NICE} />
        </header>
        <SampleForm />
      </div>
    );
  }
}
