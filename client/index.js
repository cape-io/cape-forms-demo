import React from 'react';


const initialState = window.__INITIAL_STATE__;

const rootElement = document;//.getElementById('root');

import createRootComponent from '../common/containers'

React.render(
  createRootComponent(initialState),
  rootElement
);
