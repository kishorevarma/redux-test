/**
 * Created by kishorevarman on 14/06/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/AppContainer';
import MessageContainer from '../containers/MessagesContainer';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={MessageContainer} />
  </Route>
);
export default routes;
