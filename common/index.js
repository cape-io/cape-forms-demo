import React, { Component, PropTypes } from 'react';

// Now is the time to meet the first binding that redux-react
// (https://github.com/gaearon/react-redux)
// brings to us: the Provider component.
import { Provider } from 'react-redux';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import configureStore from './create';

import Head from './containers/Head';
import Wrapper from './containers/Wrapper';

export default function createRootComponent(initialState) {
  const store = configureStore(initialState);

  return class RootComponent extends Component {
    // Provider is a React Component designed to be used as a wrapper of your application's root component. Its
    // purpose is to provide your redux instance to all of your application's components. How it does that does not
    // really matter to us but just to let you know, it's using React's context feature (it's undocumented so you
    // don't have to know about it, but if you're curious:
    // https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html).

    // The Provider must wrap your application's Root component. This way,
    // this component and all of its children (even deeply nested ones) will have access to your
    // Redux store. Of course, to allow Provider to do that, you must give it the store
    // you built previously (via a "store" props).

    render() {
      // Provider needs to have as its child, a function that returns
      // the root component instead of the component itself. This is a temporary API until React 0.14 comes
      // out, to fix a React 0.13 context issue.
      return (
        <Provider store={store}>
          {() =>
            <html>
              <Head initialState={initialState} />
              <body>
                <Wrapper />
                <DebugPanel top right bottom>
                  <DevTools store={store} monitor={LogMonitor} />
                </DebugPanel>
              </body>
            </html>
          }
        </Provider>
      )
    }
  };
}
