import React, { Component, PropTypes } from 'react';

import Counter from './Counter';
import Profile from './Profile';

// I'd like for this to be the index file.

class App extends Component {
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

export default App;
