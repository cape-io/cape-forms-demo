import React, { Component } from 'react';

import Counter from '../components/Counter';

export default class Body extends Component {
  render() {
    const { count, counter } = this.props;
    return (
      <div className="wrapper">
        <header>
          <Counter
            count={count}
            {...counter}
          />
        </header>
      </div>
    )
  }
}
