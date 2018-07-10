import React, { Component } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import './index.css';
import { auth, database } from 'firebase';

class Login extends Component {
  UNSAFE_componentWillMount() {
    this.setState({
      isLoading: JSON.parse(localStorage.getItem('isReturningUser'))
    });

    this.unsubscribeAuthStateChanged = auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({
          isLoading: false
        });
        return;
      }

      auth().user = user;
      database().user = database().ref(user.uid);
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

  UNSAFE_componentWillUnmount() {
    this.unsubscribeAuthStateChanged();
  }

  async login() {
    localStorage.setItem('isReturningUser', true);
    auth().signInWithRedirect(new auth.FacebookAuthProvider());
  }

  render() {
    const { isLoading } = this.state;

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
          <Button variant="contained" onClick={this.login} disabled={isLoading}>
            Login with facebook
          </Button>

          {isLoading ? <CircularProgress color="secondary" /> : null}
        </div>
      </div>
    );
  }
}

export default Login;
