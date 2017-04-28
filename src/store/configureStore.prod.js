import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import localStorage from '../middlewares/localStorage';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, localStorage),
);

export default configureStore();
