import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import Counter from '../components/Counter';

import * as CounterActions from '../actions/counter';

class Body extends Component {
  render() {
    const { count, dispatch } = this.props;
    const countActions = bindActionCreators(CounterActions, dispatch);

    return (
      <div className="wrapper">
        <header>
          <Counter
            count={count}
            {...countActions}
          />
        </header>

      </div>
    )
  }
}

Body.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default Body;
