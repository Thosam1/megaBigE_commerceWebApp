import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = []; // to be scalable

if (process.env.NODE_ENV === 'development') { // so no messages by logger in production 
    middlewares.push(logger);
  }

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor}; // import into index.js


