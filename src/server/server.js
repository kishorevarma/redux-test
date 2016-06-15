/**
 * Created by kishorevarman on 14/06/16.
 */
import express from 'express';
import serveStatic from 'serve-static';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import routes from '../shared/routes';
import webpack from 'webpack';
import reducers from '../shared/reducers';

const webpackConfig = require('../../webpack.config');
const app = express();

app.use('/dist', serveStatic(__dirname + './../dist'));
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === 'development' || typeof NODE_ENV === 'undefined') {
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use((req, res, next) => {
  const memoryHistory = createMemoryHistory(req.path);
  let store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    undefined,
    applyMiddleware(routerMiddleware(memoryHistory))
  );
  const history = syncHistoryWithStore(memoryHistory, store);

  function renderView(renderProps) {
    try {
      store = createStore(
        combineReducers({
          ...reducers,
          routing: routerReducer
        }),
        store.getState(),
        applyMiddleware(routerMiddleware(memoryHistory))
      );
      const InitialView = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );
      const componentHTML = ReactDOMServer.renderToString(InitialView);
      const initialState = store.getState();
      const HTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Redux Test</title>
          </head>
          <body>
            <script>
              window.__initialState__ = ${JSON.stringify(initialState)};
            </script>
            <div id="react-view">${componentHTML}</div>
            <script type="application/javascript" src="/dist/bundle.js"></script>
          </body>
        </html>
      `;
      return HTML;
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error || !renderProps) {
      res.status(500);
      res.send('<!doctype html><html><head></head><body>Some thing went wrong</body></html>');
    } else {
      res.send(renderView(renderProps));
    }
  });
});

// error handling
app.use((err, req, res, next) => {
  res.status(500).send('Global Error Handling: Something broke!');
});

export default app;
