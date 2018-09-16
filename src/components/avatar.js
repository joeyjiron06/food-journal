import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

const Avatar = ({ user, className, history, classes, onClick }) => (
  <img
    className={`${classes.image} ${className || ''}`}
    src={user.photoUrl}
    alt='avatar'
    onClick={() => {
      if (onClick) {
        onClick();
      } else {
        history.push(`/user/${user.id}`);
      }
    }}
  />
);

const styles = theme => ({
  image: {
    width: 40,
    height: 40,
    borderRadius: '100%',
    flexShrink: 0
  }
});

export default withRouter(withStyles(styles)(Avatar));
