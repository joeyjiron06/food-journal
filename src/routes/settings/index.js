import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './index.css';

class SettingsPage extends Component {
  state = {
    openPrivacyPolicy: false,
    openTOS: false
  };

  handleSignout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.clear();
        window.location.href = window.location.href; // refresh
      })
      .catch(error => {
        console.error('error signing out', error);
      });
  }

  render() {
    return (
      <div className="settings-page">
        <Typography variant="display1" gutterBottom>
          Settings
        </Typography>

        <div className="settings-page-link-container">
          <Link className="settings-page-link" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="settings-page-link" to="/terms-of-service">
            Terms of Service
          </Link>
        </div>

        <Button variant="raised" color="secondary" onClick={this.handleSignout}>
          Sign out
        </Button>
      </div>
    );
  }
}

export default SettingsPage;
