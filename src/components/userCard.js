import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Avatar from './avatar';
import moment from 'moment';

const UserCard = ({ user, stats, classes, className, ...other }) => (
  <div className={`${classes.root} ${className || ''}`} {...other}>
    <Avatar user={user} />

    <div className={classes.rightSide}>
      <div className={classes.status}>
        <Typography className={classes.userName}>{user.displayName}</Typography>
        {stats &&
          stats.lastMeal && (
            <Typography>
              <b>{stats.lastMeal.title} • </b>
              {moment(stats.lastMeal.date).fromNow()}
            </Typography>
          )}
      </div>

      <div className={classes.stats}>
        <Stat title='Vegan' percentage={stats.vegan} classes={classes} />
        <Stat
          title='Vegetarian'
          percentage={stats.vegetarian}
          classes={classes}
        />
        <Stat title='Meat' percentage={stats.meat} classes={classes} />
        <Stat title='Junk Food' percentage={stats.junkFood} classes={classes} />
      </div>

      <div className={classes.extraStats}>
        {stats.dateOfAllVeganDay && (
          <Typography gutterBottom>
            <b>{moment(stats.dateOfAllVeganDay).fromNow()} </b>
            since last all vegan day
          </Typography>
        )}

        <Typography gutterBottom>
          <b>{stats.junkFoodCountThisWeek || 0} </b>
          junk food meals eaten this week
        </Typography>

        <Typography gutterBottom>
          <b>{stats.meatCountThisWeek || 0} </b>
          meat meals eaten this week
        </Typography>

        <Typography className={classes.totalMeals}>
          <b>{stats.totalMeals || 0} </b>
          meals
        </Typography>
      </div>
    </div>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  }),
  stats: PropTypes.shape({
    meat: PropTypes.number.isRequired,
    vegetarian: PropTypes.number.isRequired,
    vegan: PropTypes.number.isRequired,
    junkFood: PropTypes.number.isRequired,
    dateOfAllVeganDay: PropTypes.number.isRequired,
    junkFoodCountThisWeek: PropTypes.number.isRequired,
    meatCountThisWeek: PropTypes.number.isRequired,
    totalMeals: PropTypes.number.isRequired,
    lastMeal: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      data: PropTypes.number
    })
  }).isRequired
};

const Stat = ({ title, percentage, classes }) => (
  <div className={classes.stat}>
    <Typography className={classes.statTitle}>{title}</Typography>
    <div className={classes.statBarContainer}>
      <div
        className={classes.statBar}
        style={{
          width: `${percentage}%`
        }}
      />
    </div>

    <Typography className={classes.statPercentage}>
      {percentage.toFixed(0) + '%'}
    </Typography>
  </div>
);

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 20
  },
  userName: {
    fontSize: 16
  },
  status: {
    opacity: 0.65
  },
  stats: {
    marginTop: 20
  },
  stat: {
    display: 'flex',
    marginBottom: 20
  },
  rightSide: {
    marginLeft: 20,
    width: '100%'
  },
  statBarContainer: {
    flexGrow: 1
  },
  statTitle: {
    minWidth: 80,
    fontWeight: 'bold',
    opacity: 0.7
  },
  statBar: {
    height: 20,
    backgroundColor: theme.palette.secondary.light
  },
  statPercentage: {
    minWidth: 40,
    textAlign: 'right'
  },
  extraStats: {
    opacity: 0.7
  },
  totalMeals: {
    textAlign: 'right'
  }
});

export default withStyles(styles)(UserCard);
