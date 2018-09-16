import React from 'react';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import Avatar from './avatar';
import { getUser } from '../api/foodJournal';

const AppBar = ({ history, classes }) => (
  <div className={classes.root}>
    <div className={classes.content}>
      <div
        onClick={() => {
          history.push('/feeds');
        }}
      >
        <img className={classes.logo} src='img/logo.png' alt='logo' />
        <div className={classes.divider} />
        <img className={classes.logo} src='img/logo-text.png' alt='logo' />
      </div>

      <Avatar
        user={getUser()}
        onClick={() => {
          // TODO: show dropdown with profile, settings, signout
          history.push('/settings');
        }}
      />
    </div>
  </div>
);

const styles = theme => ({
  root: {
    background: 'white',
    padding: '10px 20px',
    borderBottom: 'solid 1px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  logo: {
    height: 28
  },
  divider: {
    display: 'inline-block',
    width: 1,
    height: 30,
    margin: '0 10px',
    background: 'black',
    opacity: 0.2
  },
  content: {
    maxWidth: 600,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default withStyles(styles)(withRouter(AppBar));
