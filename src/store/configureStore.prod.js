import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { getStorage } from '../utils/storage';
import rootReducer from '../reducers';

const storedState = getStorage('places') || [];

const configureStore = () => {
  const store = createStore(
    rootReducer,
    { places: storedState },
    applyMiddleware(thunk),
  );

  return store;
};

export default configureStore();
