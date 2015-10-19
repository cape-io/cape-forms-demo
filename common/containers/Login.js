import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import * as authActions from '../modules/auth';

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    email: state.auth.email,
    title: state.db.title
  };
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
// Not sure why it needs to happen here.
function mapDispatchToProps(dispatch) {
  return bindActionCreators(authActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
