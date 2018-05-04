import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'components/app';
import Login from 'containers/Login';
import PrivateRoute from 'containers/PrivateRoute';
import configureStore from 'store';
// import StateApi from 'state-api';

// const store = new StateApi(window.initialData);

// ReactDOM.render(<App store={store} />, document.getElementById('app'));
// ReactDOM.render(<App />, document.getElementById('app'));

const history = createHistory();
const {store, persistor} = configureStore(history);

// debugger;
ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={'/login/'} component={Login} />
          <PrivateRoute path={'/'} component={App} store={store} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
), document.getElementById('app'));

// <Route exact path={'/login'} component={Login} />
