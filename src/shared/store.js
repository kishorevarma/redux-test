/**
 * Created by kishorevarman on 16/06/16.
 */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
const buildStore = (reducers, state, history) => {
  return createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    state,
    applyMiddleware(routerMiddleware(history))
  );
};
export default buildStore;