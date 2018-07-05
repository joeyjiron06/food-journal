import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './index.css';
import * as firebase from 'firebase';

class Login extends Component {
  componentWillMount() {
    this.unsubscribeAuthStateChanged = firebase
      .auth()
      .onAuthStateChanged(user => {
        firebase.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        this.props.history.replace('/home');
      });
  }

  componentWillUnmount() {
    this.unsubscribeAuthStateChanged();
  }

  async login() {
    firebase
      .auth()
      .signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-page-background-container">
          <img
            className="login-page-background-image"
            src="img/loginpage1.jpg"
          />
          <div className="login-page-background-overlay" />
        </div>

        <div className="login-page-content">
          <div className="login-page-title">Food Journal</div>
          <p className="login-page-subtitle">keeping track of what you eat</p>
          <Button variant="contained" onClick={this.login}>
            Login with facebook
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
