import React, { Component } from 'react';
import { Typography, Tabs, Tab } from '@material-ui/core';
import { fetchMeals } from '../../model/meal';
import {
  dateRangeOfToday,
  dateRangeOfWeek,
  dateRangeOfMonth,
  dateRangeOfYear
} from '../../model/date';

import './index.css';

const calculateStats = meals => {
  meals = meals || [];

  let meat = 0;
  let vegetarian = 0;
  let vegan = 0;
  let junkFood = 0;

  meals.forEach(meal => {
    if (meal.type === 'meat') meat++;
    if (meal.type === 'vegetarian') vegetarian++;
    if (meal.type === 'vegan') vegan++;
    if (meal.type === 'junk') junkFood++;
  });

  return {
    meat: (meat * 100) / meals.length,
    vegetarian: (vegetarian * 100) / meals.length,
    vegan: (vegan * 100) / meals.length,
    junkFood: (junkFood * 100) / meals.length
  };
};

const Statistic = ({ title, value }) => (
  <div className="stats-page-stat">
    <Typography className="state-page-state-title">{title}</Typography>
    <div className="stats-page-percentage-container">
      <div
        className="stats-page-percentage-bar"
        style={{
          width: (value || 0) + '%'
        }}
      />
    </div>
    <Typography style={{ display: 'inline' }}>
      {parseFloat((value || 0).toFixed(1)) + '%'}
    </Typography>
  </div>
);

function cancellable(promise, callback) {
  let cancelled = false;
  promise
    .then(data => {
      if (cancelled) return;
      callback(null, data);
    })
    .catch(error => {
      if (cancelled) return;
      callback(error, null);
    });
  return function cancel() {
    cancelled = true;
  };
}

class StatisticsPage extends Component {
  state = {
    stats: null,
    value: 0
  };

  loadMeals(dateRange, cacheKey) {
    if (this.cancelLoading) {
      this.cancelLoading();
      this.cancelLoading = null;
    }

    let promise;

    if (this[cacheKey]) {
      promise = Promise.resolve(this[cacheKey]);
    } else {
      promise = fetchMeals(dateRange);
    }

    this.setState({
      isLoading: true,
      error: null,
      meals: null
    });

    this.cancelLoading = cancellable(promise, (error, meals) => {
      console.log('got meals', meals);
      this.setState({
        error,
        stats: calculateStats(meals),
        isLoading: false
      });
      this[cacheKey] = meals;
    });
  }

  handleTabClicked = (event, value) => {
    switch (value) {
      case 0:
        this.loadMeals(dateRangeOfToday(), 'today');
        break;
      case 1:
        this.loadMeals(dateRangeOfWeek(), 'week');
        break;
      case 2:
        this.loadMeals(dateRangeOfMonth(), 'month');
        break;
      case 3:
        this.loadMeals(dateRangeOfYear(), 'year');
        break;
      default:
        console.warn('unhandled value', value);
        break;
    }

    this.setState({ value });
  };

  UNSAFE_componentWillMount() {
    this.handleTabClicked(null, 0);
  }

  render() {
    const stats = this.state.stats || {};
    const { value } = this.state;

    return (
      <div className="stats-page">
        <Typography variant="display1" gutterBottom>
          Statistics
        </Typography>

        <Tabs
          value={value}
          onChange={this.handleTabClicked}
          indicatorColor="primary"
          textColor="primary"
          scrollable
          scrollButtons="auto"
        >
          <Tab label="Today" />
          <Tab label="Week" />
          <Tab label="Month" />
          <Tab label="Year" />
        </Tabs>

        <div className="stats-page-chart">
          <Statistic title="Junk Food" value={stats.junkFood} />
          <Statistic title="Meat" value={stats.meat} />
          <Statistic title="Vegan" value={stats.vegan} />
          <Statistic title="Vegetarian" value={stats.vegetarian} />
        </div>
      </div>
    );
  }
}

export default StatisticsPage;
