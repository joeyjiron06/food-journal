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
        firebase.user.db = firebase.database().ref(user.uid);
        localStorage.setItem('user', JSON.stringify(user));

        const pathname =
          (this.props.location &&
            this.props.location.state &&
            this.props.location.state.from &&
            this.props.location.state.from.pathname) ||
          '/home';

        this.props.history.replace(pathname);
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
