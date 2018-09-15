import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

const Avatar = ({ user, className, history, classes }) => (
  <img
    className={`${classes.image} ${className || ''}`}
    src={user.photoUrl}
    alt='avatar'
    onClick={() => {
      history.push(`/user/${user.id}`);
    }}
  />
);

const styles = theme => ({
  image: {
    width: 40,
    height: 40,
    borderRadius: '100%'
  }
});

export default withRouter(withStyles(styles)(Avatar));
