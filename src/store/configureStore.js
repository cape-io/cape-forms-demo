import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';

// Add middleware to this array.
const middleware = [thunk];

export default function configureStore(initialState) {
  let finalCreateStore;
  // In production, we want to use just the middleware.
  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = applyMiddleware(...middleware);
  }
  // In development, we want to use some store enhancers from redux-devtools.
  // UglifyJS will eliminate the dead code depending on the build environment.
  else {
    finalCreateStore = compose(
      // Enables your middleware:
      applyMiddleware(...middleware),
      // Provides support for DevTools:
      devTools(),
      // Lets you write ?debug_session=<name> in address bar to persist debug sessions
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    );
  }
  const store = finalCreateStore(createStore)(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
