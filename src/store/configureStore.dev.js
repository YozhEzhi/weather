import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { getStorage } from '../utils/storage';
import rootReducer from '../reducers';

const initialState = getStorage('places') || {};

const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, createLogger()),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore();
