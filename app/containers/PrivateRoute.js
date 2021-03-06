import React from 'react';
// import ReactDOM from 'react-dom';
import {Route, Redirect} from 'react-router';
import {connect} from 'react-redux';

import * as reducers from 'reducers';

// debugger;
const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
  <Route {...rest} render={(props) => (
    isAuthenticated ? ( <Component {...props} /> ) : ( <Redirect to={{
      pathname: '/login',
      state: {from: props.location}
    }} />)
  )} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: reducers.isAuthenticated(state)
});

export default connect(mapStateToProps, null)(PrivateRoute);
