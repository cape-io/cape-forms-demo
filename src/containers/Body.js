import React, { Component } from 'react';

import Counter from '../components/Counter';

export default class Body extends Component {
  render() {
    const { hi, ...other } = this.props;
    return (
      <div className="wrapper">
        <header>
          <Counter {...other} />
        </header>
      </div>
    )
  }
}
