import React, { Component } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  CircularProgress,
  ListItemSecondaryAction,
  IconButton,
  Icon
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  fetchHistory,
  fetchUser,
  fetchUserStats,
  getUser
} from '../../api/foodJournal';
import EditMeal from '../../components/editMeal';
import UserCard from '../../components/userCard';
import moment from 'moment';

class UserPage extends Component {
  state = {
    days: null,
    user: null,
    stats: null,
    isLoading: true,
    error: false
  };

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { match } = this.props;
    const userId = match && match.params.id;
    // const recipeFromState = location && location.state && location.state.recipe;

    try {
      const user = await fetchUser(userId);
      const stats = await fetchUserStats(userId);
      const days = await fetchHistory(userId);
      console.log(days);
      this.setState({
        days,
        user,
        stats,
        isLoading: false
      });
    } catch (e) {
      console.error(e);
      this.setState({
        error: e,
        isLoading: false
      });
    }
  }

  handleMealClicked = meal => () => {
    this.setState({
      editMeal: meal
    });
  };

  handleCloseModal = () => {
    this.setState({ editMeal: null });
  };

  handleMealConfirmed = async meal => {
    this.handleCloseModal();
    this.loadData();
  };

  handleRemoveMeal = meal => {
    this.handleCloseModal();
    this.loadData();
  };

  render() {
    const { classes } = this.props;
    const { days, user, stats, editMeal, isLoading, error } = this.state;
    const allowEdit = user && user.id === getUser().id;

    return (
      <div className={classes.root}>
        <div>
          {(() => {
            if (isLoading) {
              return <CircularProgress color='secondary' />;
            }

            if (error) {
              return <Typography>Error fetching meals.</Typography>;
            }

            if (!days.length) {
              return <Typography>No meals added!</Typography>;
            }

            return (
              <div>
                <UserCard user={user} stats={stats} />

                <Typography
                  variant='headline'
                  className={classes.mealListTitle}
                >
                  Meals
                </Typography>

                <List subheader={<li />}>
                  {days.map(day => (
                    <li key={`${day.date}`}>
                      <ul>
                        <ListSubheader disableSticky={true}>
                          {formatDay(day.date)}
                        </ListSubheader>

                        {day.meals.map(meal => (
                          <ListItem
                            key={meal.id}
                            className={classes.mealListItem}
                          >
                            <ListItemText
                              primary={meal.title}
                              secondary={
                                isToday(meal.date)
                                  ? `${moment(meal.date).fromNow()} • ${
                                      meal.type
                                    }`
                                  : meal.type
                              }
                            />

                            {allowEdit && (
                              <ListItemSecondaryAction>
                                <IconButton
                                  onClick={this.handleMealClicked(meal)}
                                >
                                  <Icon>edit</Icon>
                                </IconButton>
                              </ListItemSecondaryAction>
                            )}
                          </ListItem>
                        ))}
                      </ul>
                    </li>
                  ))}
                </List>
              </div>
            );
          })()}
        </div>

        {!!editMeal && (
          <EditMeal
            meal={editMeal}
            onRemove={this.handleRemoveMeal}
            onConfirm={this.handleMealConfirmed}
            onCancel={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

const isToday = date => {
  const momentDate = moment(date);
  const start = moment().startOf('day');
  const end = moment().endOf('day');
  return momentDate.isBetween(start, end);
};

const formatDay = date => {
  if (isToday(date)) {
    return 'Today';
  }

  const momentDate = moment(date);
  let start = moment()
    .startOf('day')
    .subtract(1, 'day');
  let end = moment()
    .endOf('day')
    .subtract(1, 'day');

  if (momentDate.isBetween(start, end)) {
    return 'Yesterday';
  }

  start = start.subtract(1, 'day');
  end = end.subtract(1, 'day');

  if (momentDate.isBetween(start, end)) {
    return '2 days ago';
  }

  return date.toLocaleDateString();
};

const styles = theme => ({
  root: {
    maxWidth: 600,
    margin: '0 auto'
  },
  mealListTitle: {
    padding: '20px 16px'
  },
  mealListItem: {
    backgroundColor: 'white'
  }
});

export default withStyles(styles)(UserPage);
