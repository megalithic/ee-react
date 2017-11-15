import {applyMiddleware, compose, createStore} from 'redux';
import createHistory from 'history/createBrowserHistory';
import createRavenMiddleware from 'raven-for-redux';
import {routerMiddleware} from 'react-router-redux';
import Raven from 'raven-js';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// TODO/FIXME: must work out ENV variables across environments, some by .env
// files, some by CircleCI ENV variables.
Raven.config(
  // this DSN is strictly for testing/dev purposes and must not be used in
  // production - SBM 11/15/17
  'https://4caf3c828f774195b137382beba5b316@sentry.io/245667'
).install();

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
  createRavenMiddleware(Raven, {}),
];

if (process.env.NODE_ENV === 'development') {
  // enhancers
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  // redux-logger
  const {createLogger} = require('redux-logger');
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error,
  });
  middleware.push(logger);
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
