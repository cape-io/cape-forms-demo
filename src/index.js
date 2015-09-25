import React from 'react';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
