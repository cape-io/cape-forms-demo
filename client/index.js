import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import createRootComponent from '../common';

const initialState = window.__INITIAL_STATE__;
if (!initialState) {
  console.log('initState', initialState);
  throw new Error('Missing __INITIAL_STATE__');
}

const RootComponent = createRootComponent(initialState);

ReactDOM.render(
  <RootComponent />,
  document
);

//console.log(React.renderToString(<RootComponent />));
