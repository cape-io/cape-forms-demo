import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.interval = setInterval(() => this.tick(), 30000);
  }

  tick() {
    const { increment } = this.props;
    increment();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, count } = this.props;
    return (
      <div>
        <h3>Counter: {count}</h3>
        <p>
          <button onClick={increment}>+</button>
          {' '}
          <button onClick={decrement}>-</button>
          {' '}
          <button onClick={incrementIfOdd}>Increment if odd</button>
          {' '}
          <button onClick={() => incrementAsync()}>Increment async</button>
        </p>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Counter;
