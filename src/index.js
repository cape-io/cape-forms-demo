import React from 'react';
import { Provider } from 'react-redux';

import { App } from './App';
import configureStore from './redux/configureStore';

const store = configureStore();

React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
