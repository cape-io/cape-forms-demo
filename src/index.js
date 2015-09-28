import React from 'react';

// Now is the time to meet the first binding that redux-react
// (https://github.com/gaearon/react-redux)
// brings to us: the Provider component.
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

// Provider is a React Component designed to be used as a wrapper of your application's root component. Its
// purpose is to provide your redux instance to all of your application's components. How it does that does not
// really matter to us but just to let you know, it's using React's context feature (it's undocumented so you
// don't have to know about it, but if you're curious:
// https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html).

// The Provider must wrap your application's Root component. This way,
// this component and all of its children (even deeply nested ones) will have access to your
// Redux store. Of course, to allow Provider to do that, you must give it the store
// you built previously (via a "store" props).
// That's almost all there is to say about Provider...

React.render(
  // Provider needs to have as its child, a function that returns
  // the root component instead of the component itself. This is a temporary API until React 0.14 comes
  // out, to fix a React 0.13 context issue.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
