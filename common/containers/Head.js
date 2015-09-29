import { connect } from 'react-redux';

import Head from '../components/Head';

function mapStateToProps(state) {
  return state.head;
}

export default connect(mapStateToProps)(Head);
