import React, { Component } from 'react';
import { CircularProgress, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { getUser, fetchUsersFeed } from '../../api/foodJournal';
import Avatar from '../../components/avatar';
import UserCard from './userCard';

class FeedsPage extends Component {
  state = {
    isLoading: true,
    users: null,
    error: false
  };

  async UNSAFE_componentWillMount() {
    await this.fetchFeeds();
  }

  async fetchFeeds() {
    try {
      const users = await fetchUsersFeed();
      this.setState({
        isLoading: false,
        users
      });
    } catch (e) {
      this.setState({
        isLoading: false,
        error: true
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { isLoading, users, error } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.userContainer}>
          <Avatar user={getUser()} className={classes.userAvatar} />
          <TextField fullWidth={true} placeholder='What did you have to eat?' />
        </div>

        {(() => {
          if (isLoading) {
            return <CircularProgress />;
          }

          if (error) {
            return (
              <div onClick={() => this.fetchFeeds()}>
                Error fetching feed. Tap to reload.
              </div>
            );
          }

          return users.map(user => (
            <UserCard key={user.id} user={user} className={classes.userCard} />
          ));
        })()}
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    maxWidth: 600,
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto'
    }
  },
  userContainer: {
    display: 'flex',
    padding: 20,
    maxWidth: 600
  },
  userAvatar: {
    marginRight: 20
  },
  userCard: {
    marginBottom: 10,
    maxWidth: 600
  }
});

export default withStyles(styles)(FeedsPage);
