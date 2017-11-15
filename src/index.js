import App from './containers/app';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import React from 'react';
import registerServiceWorker from './utils/registerServiceWorker';
import {render} from 'react-dom';
import store, {history} from './store';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
