import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter';
import * as Actions from './redux/actions';

// This is where we define computed fields (reselect module) or make other changes.
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
