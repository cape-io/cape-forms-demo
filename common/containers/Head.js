import { connect } from 'react-redux';

import Head from '../components/Head';

function mapStateToProps(state) {
  return {
    title: state.db.title,
    ...state.theme
  }
}

export default connect(mapStateToProps)(Head);
