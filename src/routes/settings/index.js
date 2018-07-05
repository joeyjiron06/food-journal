import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';
import firebase from 'firebase';
import './index.css';

class SettingsPage extends Component {
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

        <Button variant="raised" color="secondary" onClick={this.handleSignout}>
          Sign out
        </Button>
      </div>
    );
  }
}

export default SettingsPage;
