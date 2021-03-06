import React, { Component, PropTypes } from 'react';

class InitialState extends Component {
  // Never update?
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    const { initialState } = this.props;
    const jsCode = `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};`;

    return (
      <script dangerouslySetInnerHTML={{__html: jsCode}}></script>
    );
  }
}

InitialState.propTypes = {
  initialState: PropTypes.object.isRequired
};

export default InitialState;
