import React from 'react';
// import ReactDOM from 'react-dom';
// import {Form} from 'reactstrap';

import GreetingText from 'components/GreetingText';
import TextInput from 'components/TextInput';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onBlurHandler(e) {
    if(e.target.value.trim() !== '') {
      e.target.classList.add('has-val');
    } else {
      e.target.classList.remove('has-val');
    }
  }

  onInputChange = (e) => {
    // console.log('Hello');
    const target = e.target,
      name = target.name,
      value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    const errors = this.props.errors || {};

    return (
      <div className="auth-form-wrapper">
        <div className="auth-form">
          <form onSubmit={this.onSubmit}>
            <GreetingText />
            <TextInput name="username" placeholder="Login" errors={errors.username}
              value={this.state.username} onChange={this.onInputChange} />
            <TextInput type="password" name="password" placeholder="Password" errors={errors.password}
              value={this.state.password} onChange={this.onInputChange} />
            <div className="btn-container">
              <div className="btn-wrapper">
                <div className="login-bgbtn"></div>
                <button type="submit" className="login-btn">Login</button>
              </div>
            </div>
            <div className="text-center p-t-115">
              <span className="txt1">Don&apos;t have an account? <a href="#" className="">Sign up</a></span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
