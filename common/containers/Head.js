import { connect } from 'react-redux';

import Head from '../components/Head';

function mapStateToProps(state) {
  return {
    head: state.head
  };
}

export default connect(mapStateToProps)(Head);
