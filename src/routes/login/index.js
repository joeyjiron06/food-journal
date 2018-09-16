import React, { Component } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import './index.css';
import { onAuthStateChanged, login, updateStats } from '../../api/foodJournal';
import { withStyles } from '@material-ui/core/styles';

class Login extends Component {
  async UNSAFE_componentWillMount() {
    this.setState({
      isLoading: JSON.parse(localStorage.getItem('isReturningUser'))
    });

    try {
      const user = await onAuthStateChanged();
      await this.onAuthSuccess(user);
    } catch (e) {
      console.error(e);
      this.setState({
        isLoading: false
      });
    }
  }

  login = async () => {
    localStorage.setItem('isReturningUser', true);
    try {
      const user = await login();
      await this.onAuthSuccess(user);
    } catch (e) {
      console.error(e);
    }
  };

  async onAuthSuccess(user) {
    await updateStats();

    localStorage.setItem('user', JSON.stringify(user));

    const pathname =
      (this.props.location &&
        this.props.location.state &&
        this.props.location.state.from &&
        this.props.location.state.from.pathname) ||
      '/feeds';

    this.props.history.replace(pathname);
  }

  render() {
    const { isLoading } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.backgroundContainer}>
          <img
            className={classes.backgroundImage}
            src='img/loginpage1.jpg'
            alt='login page'
          />
          <div className={classes.backgroundOverlay} />
        </div>

        <div className={classes.content}>
          <div className={classes.title}>Food Journal</div>
          <p className={classes.subtitle}>keeping track of what you eat</p>
          <Button variant='contained' onClick={this.login} disabled={isLoading}>
            Login with facebook
          </Button>

          {isLoading ? <CircularProgress color='secondary' /> : null}
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    color: 'white'
  },

  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'black',
    opacity: 0.6
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold'
  },

  subtitle: {
    marginBottom: 40
  }
});

export default withStyles(styles)(Login);
