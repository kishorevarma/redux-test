/**
 * Created by kishorevarman on 14/06/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../shared/routes';
import { browserHistory, Router, IndexRoute, Route } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from '../shared/reducers';
import AppView from '../shared/containers/AppContainer';
import MessagesContainer from '../shared/containers/MessagesContainer';
const initialState = window.__initialState__;

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  initialState
);
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppView}>
        <IndexRoute component={MessagesContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react-view')
);
