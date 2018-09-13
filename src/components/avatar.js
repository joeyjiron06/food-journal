import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Avatar = ({ user, className, classes }) => (
  <img
    className={`${classes.image} ${className || ''}`}
    src={user.photoUrl}
    alt='avatar'
  />
);

const styles = theme => ({
  image: {
    width: 40,
    height: 40,
    borderRadius: '100%'
  }
});

export default withStyles(styles)(Avatar);
