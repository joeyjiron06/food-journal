import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';
import * as firebase from 'firebase';

class Login extends Component {

  componentWillMount() {
    this.unsubscribeAuthStateChanged = firebase.auth().onAuthStateChanged(user => {
      localStorage.setItem('user', user);
      this.props.history.replace('/home');
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuthStateChanged();
  }

  async login() {
    firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-page-background-container">
          <img className="login-page-background-image" src="img/loginpage1.jpg"/>
          <div className="login-page-background-overlay"></div>
        </div>

        <div className="login-page-content">
          <div className="login-page-title">Food Journal</div>
          <p>keeping track of what you eat</p>
          <RaisedButton className="login-page-button" label="Login with facebook" primary={true} onClick={this.login} />
        </div>
      </div>
    );
  }
}

export default Login;