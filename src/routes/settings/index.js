import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';
import { auth } from 'firebase';
import './index.css';

class SettingsPage extends Component {
  state = {
    openPrivacyPolicy: false,
    openTOS: false
  };

  handleSignout() {
    auth()
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
          <a
            className="settings-page-link"
            href={`${window.location.origin +
              (process.env.PUBLIC_URL || '')}/privacy-policy.html`}
          >
            Privacy Policy
          </a>

          <a
            className="settings-page-link"
            href={`${window.location.origin +
              (process.env.PUBLIC_URL || '')}/terms-of-service.html`}
          >
            Terms of Service
          </a>
        </div>

        <Button variant="raised" color="secondary" onClick={this.handleSignout}>
          Sign out
        </Button>
      </div>
    );
  }
}

export default SettingsPage;
