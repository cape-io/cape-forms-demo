import 'babel-core/polyfill';
import React from 'react';

const initialState = window.__INITIAL_STATE__;
if (!initialState) {
  console.log('initState', initialState);
  throw new Error('Missing __INITIAL_STATE__');
}

import createRootComponent from '../common';

const RootComponent = createRootComponent(initialState);

React.render(
  <RootComponent />,
  document
);

//console.log(React.renderToString(<RootComponent />));
