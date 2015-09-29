import React from 'react';


const initialState = window.__INITIAL_STATE__;

import createRootComponent from '../common';

const {RootComponent} = createRootComponent(initialState);

React.render(
  <RootComponent />,
  document
);
