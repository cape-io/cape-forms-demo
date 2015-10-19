import React, { Component, PropTypes } from 'react';

import Counter from './Counter';
import Header from './Header';
import Login from './Login';
import Profile from './Profile';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header>
          <Counter />
        </Header>
        <Login />
        <Profile />
      </div>
    )
  }
}
