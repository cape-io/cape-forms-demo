import { connect } from 'react-redux';

import Header from '../components/Header';

function mapStateToProps(state) {
  return {
    title: state.db.title,
  }
}

export default connect(mapStateToProps)(Header);
