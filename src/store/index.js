import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers/reducer';


const middlewares = applyMiddleware(
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
