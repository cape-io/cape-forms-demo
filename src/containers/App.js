import React, { Component, PropTypes } from 'react';

import Counter from './Counter';

// I'd like for this to be the index file.

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <Counter />
        </header>
      </div>
    )
  }
}

export default App;
