import React, { Component } from 'react';
import {
  CircularProgress,
  TextField,
  MenuItem,
  Icon,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  FormHelperText
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { fetchUsersFeed, addMeal } from '../../api/foodJournal';
import UserCard from './userCard';

class FeedsPage extends Component {
  state = {
    isLoading: true,
    users: null,
    error: false,
    mealTitle: null
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

  handleMealTypeSelected = e => {
    const { value } = e.target;
    this.setState({
      meal: {
        ...this.state.meal,
        type: value
      }
    });
  };

  handleMealTextChanged = e => {
    const value = e.target.value;
    const newMeal = {
      ...this.state.meal,
      title: value
    };

    this.setState({
      meal: newMeal
    });
  };

  handleCreateMeal = async () => {
    const { meal } = this.state;
    await addMeal(meal);
    await this.fetchFeeds();
    this.setState({ meal: null, users: this.state.users });
  };

  render() {
    const { classes } = this.props;
    const { isLoading, users, error, meal } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.userContainer}>
          <TextField
            className={classes.textField}
            fullWidth={true}
            placeholder='What did you have to eat?'
            value={(meal && meal.title) || ''}
            onChange={this.handleMealTextChanged}
          />

          {meal &&
            meal.title && (
              <div className={classes.mealActionContainer}>
                <FormControl required>
                  <InputLabel htmlFor='mealtype-required'>Meal Type</InputLabel>

                  <Select
                    className={classes.mealTypeSelect}
                    value={(meal && meal.type) || ''}
                    onChange={this.handleMealTypeSelected}
                    name='mealtype'
                    inputProps={{
                      id: 'mealtype-required'
                    }}
                  >
                    <MenuItem value='vegan'>Vegan</MenuItem>
                    <MenuItem value='vegetarian'>Vegetarian</MenuItem>
                    <MenuItem value='meat'>Meat</MenuItem>
                    <MenuItem value='junk'>Junk Food</MenuItem>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>

                <IconButton
                  color='primary'
                  disabled={!meal || !meal.type || !meal.title}
                  onClick={this.handleCreateMeal}
                >
                  <Icon>send</Icon>
                </IconButton>
              </div>
            )}
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
    alignItems: 'center',
    padding: '20px 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 20
    }
  },
  userAvatar: {
    marginRight: 20
  },
  userCard: {
    marginBottom: 10
  },
  mealTypeButton: {
    minWidth: 128
  },
  textField: {
    marginRight: 10
  },
  mealActionContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  mealTypeSelect: {
    minWidth: 128
  }
});

export default withStyles(styles)(FeedsPage);
