import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Body from './Body';
import * as CounterActions from '../actions/counter';

// This is where we define computed fields (reselect module) or make other changes.
function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

// This gets merged into props too.
function mapDispatchToProps(dispatch) {
  return {
    counter: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
