import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

import LoginForm from 'components/LoginForm';
import {login} from 'actions/auth';
import {authErrors, isAuthenticated} from 'reducers';

class Login extends React.Component {
  render() {
    if (this.props.isAuthenticated) {
      return (
        <Redirect to={'/'} />
      );
    }

    return (
      <LoginForm {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, password) => {
    // debugger;
    dispatch(login(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
