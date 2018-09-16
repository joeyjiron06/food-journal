import React, { Component } from 'react';
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { signOut, deleteAccount } from '../api/foodJournal';

class SettingsPage extends Component {
  state = {
    showDeleteAccountConfirmation: false
  };

  async handleSignout() {
    try {
      await signOut();
    } catch (e) {
      console.error('error signing out', e);
    } finally {
      localStorage.clear();
      window.location.reload(); // refresh the page
    }
  }

  handleDeleteAccount = () => {
    this.setState({
      showDeleteAccountConfirmation: true
    });
  };

  handleCancelDeleteAccount = () => {
    this.setState({
      showDeleteAccountConfirmation: false
    });
  };

  handleDeleteAccountConfirmed = async () => {
    await deleteAccount();
    await this.handleSignout();
  };

  render() {
    const { classes } = this.props;
    const { showDeleteAccountConfirmation } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant='display1' gutterBottom>
          Settings
        </Typography>

        <Typography gutterBottom>
          Thank you for using Food Journal. If you find a bug click on the
          github link below and submit an issue.
        </Typography>

        <div className={classes.linkContainer}>
          <a
            className={classes.link}
            href={'https://github.com/joeyjiron06/food-journal'}
          >
            Github
          </a>

          <a
            className={classes.link}
            href={`${window.location.origin +
              (process.env.PUBLIC_URL || '')}/privacy-policy.html`}
          >
            Privacy Policy
          </a>

          <a
            className={classes.link}
            href={`${window.location.origin +
              (process.env.PUBLIC_URL || '')}/terms-of-service.html`}
          >
            Terms of Service
          </a>
        </div>

        <Button
          className={classes.button}
          variant='raised'
          color='secondary'
          onClick={this.handleSignout}
        >
          Sign out
        </Button>

        <Button
          variant='raised'
          color='secondary'
          className={classes.button}
          onClick={this.handleDeleteAccount}
        >
          Delete Account
        </Button>

        {showDeleteAccountConfirmation && (
          <Dialog open={true}>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete your account? This action cannot
                be undone.
              </DialogContentText>
            </DialogContent>

            <DialogActions>
              <Button onClick={this.handleCancelDeleteAccount}>Cancel</Button>
              <Button
                color='secondary'
                onClick={this.handleDeleteAccountConfirmed}
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    );
  }
}

const styles = {
  root: {
    padding: '30px 20px'
  },

  link: {
    color: '#3f51b5',
    textDecoration: 'underline',
    marginRight: 10
  },

  linkContainer: {
    marginBottom: 20
  },
  button: {
    marginRight: 20
  }
};

export default withStyles(styles)(SettingsPage);
