import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // to be scalable

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store; // import into index.js


