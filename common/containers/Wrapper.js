import React, { Component, PropTypes } from 'react';

import Counter from './Counter';
import Profile from './Profile';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <Counter />
        </header>
        <Profile />
      </div>
    )
  }
}
