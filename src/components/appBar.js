import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { withRouter } from 'react-router';
import Avatar from './avatar';
import { getUser } from '../api/foodJournal';

const AppBar = ({ history, classes }) => (
  <div className={classes.root}>
    <div className={classes.content}>
      <Typography variant='title'>Food Journal</Typography>

      <Avatar
        user={getUser()}
        onClick={() => {
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
    borderBottom: 'solid 1px rgba(0,0,0,0.1)'
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
