import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import geoMiddleware from 'src/middlewares/geoMiddleware';

import reducer from 'src/reducers';

const middlewares = applyMiddleware(
  geoMiddleware,
  // d'autres middlewares directement dans les paramètres
);

// on construit un enhancer avec à la fois dev tool et middlewares
const composedEnhancers = composeWithDevTools(middlewares);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  composedEnhancers,
);

export default store;
