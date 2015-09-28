import {  } from 'redux';
import { connect } from 'react-redux';
import Body from './Body';

// This is where we define computed fields (reselect module) or make other changes.
function mapStateToProps(state) {
  return {
    count: state.counter
  };
}

// This gets merged into props too.
// Not sure why it needs to happen here.
function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps)(Body);
