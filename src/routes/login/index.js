import React, { Component } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import './index.css';
import * as firebase from 'firebase';

class Login extends Component {
  componentWillMount() {
    this.setState({
      isReturningUser: JSON.parse(localStorage.getItem('isReturningUser'))
    });

    this.unsubscribeAuthStateChanged = firebase
      .auth()
      .onAuthStateChanged(user => {
        if (!user) {
          return;
        }

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
    localStorage.setItem('isReturningUser', true);
    firebase
      .auth()
      .signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  render() {
    const { isReturningUser } = this.state;

    return (
      <div className="login-page">
        <div className="login-page-background-container">
          <img
            className="login-page-background-image"
            src="img/loginpage1.jpg"
            alt="login page"
          />
          <div className="login-page-background-overlay" />
        </div>

        <div className="login-page-content">
          <div className="login-page-title">Food Journal</div>
          <p className="login-page-subtitle">keeping track of what you eat</p>
          <Button
            variant="contained"
            onClick={this.login}
            disabled={!!isReturningUser}
          >
            Login with facebook
          </Button>

          {isReturningUser ? <CircularProgress color="secondary" /> : null}
        </div>
      </div>
    );
  }
}

export default Login;
