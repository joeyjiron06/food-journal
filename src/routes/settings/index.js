import React, { Component } from 'react';
import { Button, Typography, Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import { database } from 'firebase';
import { logout } from '../../api/foodJournal';
import debounce from '../../utils/debouncer';
import './index.css';

const styles = {
  goalContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  goalPercentage: {
    marginRight: 10
  },
  goalMealType: {
    flexShrink: 0
  }
};

class SettingsPage extends Component {
  state = {
    goalValue: 0,
    mealTypeButtonRef: null
  };

  handleGoalPercentageChanged = (event, value) => {
    this.setGoalPercentageDebouncer(value);
    this.setState({ goalPercentage: value });
  };
  handleMealTypeClick = event => {
    this.setState({ mealTypeButtonRef: event.target });
  };
  handleMealTypeMenuClose = () => {
    this.setState({ mealTypeButtonRef: null });
  };
  handleMealTypeSelected = event => {
    const value = event.target.getAttribute('value');
    const title = event.target.textContent;
    this.setState({ mealTypeButtonRef: null, goalMealType: title });
    this.goalRef.child('mealType').set(value);
  };

  async handleSignout() {
    try {
      await logout();
    } catch (e) {
      localStorage.clear();
      window.location.href = window.location.href; // refresh
    }
  }

  UNSAFE_componentWillMount() {
    this.mounted = true;
    this.goalRef = database().user.child('goal');
    this.goalRef
      .once('value')
      .then(snapshot => {
        if (!this.mounted) {
          return;
        }

        const goal = snapshot.val();
        if (goal) {
          this.setState({
            goalPercentage: goal.percentage,
            goalMealType: goal.mealType
          });
        }
      })
      .catch(error => {
        if (!this.mounted) {
          return;
        }
        console.error('error fetching goal');
      });

    this.setGoalPercentageDebouncer = debounce(500, percentage => {
      percentage = Math.round(percentage);
      console.log('setting goal percentage to', percentage);
      this.goalRef.child('percentage').set(percentage);
    });
  }
  UNSAFE_componentWillUnmount() {
    this.mounted = false;
    this.setGoalPercentageDebouncer.destroy();
  }

  render() {
    const { goalPercentage, goalMealType, mealTypeButtonRef } = this.state;
    const { classes } = this.props;

    return (
      <div className='settings-page'>
        <Typography variant='display1' gutterBottom>
          Settings
        </Typography>

        <div>
          <Typography>
            What percentage of a specific kind of meal type would you like as
            your goal?
          </Typography>

          <div className={classes.goalContainer}>
            <Slider
              style={{ marginRight: 20 }}
              value={goalPercentage || 0}
              onChange={this.handleGoalPercentageChanged}
            />
            <Typography
              variant='subheading'
              className={classes.goalPercentage}
            >{`${Math.round(goalPercentage)}%`}</Typography>

            <Button
              onClick={this.handleMealTypeClick}
              className={classes.goalMealType}
            >
              {goalMealType ? goalMealType : 'Meal Type'}
            </Button>
            <Menu
              anchorEl={mealTypeButtonRef}
              open={Boolean(mealTypeButtonRef)}
              onClose={this.handleMealTypeMenuClose}
            >
              <MenuItem value='junk' onClick={this.handleMealTypeSelected}>
                Junk Food
              </MenuItem>
              <MenuItem value='meat' onClick={this.handleMealTypeSelected}>
                Meat
              </MenuItem>
              <MenuItem value='vegan' onClick={this.handleMealTypeSelected}>
                Vegan
              </MenuItem>
              <MenuItem
                value='vegetarian'
                onClick={this.handleMealTypeSelected}
              >
                Vegetarian
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div className='settings-page-link-container'>
          <a
            className='settings-page-link'
            href={`${window.location.origin +
              (process.env.PUBLIC_URL || '')}/privacy-policy.html`}
          >
            Privacy Policy
          </a>

          <a
            className='settings-page-link'
            href={`${window.location.origin +
              (process.env.PUBLIC_URL || '')}/terms-of-service.html`}
          >
            Terms of Service
          </a>
        </div>

        <Button variant='raised' color='secondary' onClick={this.handleSignout}>
          Sign out
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(SettingsPage);
