import React, { Component } from 'react';
import { Typography, Tabs, Tab } from '@material-ui/core';
import './index.css';

const calculateStats = meals => {
  let meat = 0;
  let vegetarian = 0;
  let vegan = 0;
  let junkFood = 0;

  meals.forEach(meal => {
    if (meal.type === 'meat') meat++;
    if (meal.type === 'vegetarian') vegetarian++;
    if (meal.type === 'vegan') vegan++;
    if (meal.type === 'junk food') junkFood++;
  });

  return {
    meat: (meat * 100) / meals.length,
    vegetarian: (vegetarian * 100) / meals.length,
    vegan: (vegan * 100) / meals.length,
    junkFood: (junkFood * 100) / meals.length
  };
};

let id = 0;
const meals = [
  {
    id: id++,
    title: 'Oatmeal',
    type: 'vegetarian'
  },
  {
    id: id++,
    title: 'PB&J',
    type: 'vegan'
  },
  {
    id: id++,
    title: 'Soda',
    type: 'junk food'
  },
  {
    id: id++,
    title: '2 Beers',
    type: 'junk food'
  },
  {
    id: id++,
    title: 'Oatmeal',
    type: 'vegan'
  },
  {
    id: id++,
    title: 'PB&J',
    type: 'vegan'
  },
  {
    id: id++,
    title: 'Soda',
    type: 'junk'
  },
  {
    id: id++,
    title: '2 Beers',
    type: 'meat'
  }
];
const weekmeals = [
  ...meals,
  {
    id: id++,
    title: 'Oatmeal',
    type: 'vegan'
  },
  {
    id: id++,
    title: 'PB&J',
    type: 'junk food'
  },
  {
    id: id++,
    title: 'Soda',
    type: 'junk food'
  },
  {
    id: id++,
    title: '2 Beers',
    type: 'junk food'
  },
  {
    id: id++,
    title: 'Oatmeal',
    type: 'junk food'
  },
  {
    id: id++,
    title: 'PB&J',
    type: 'meat'
  },
  {
    id: id++,
    title: 'Soda',
    type: 'meat'
  },
  {
    id: id++,
    title: '2 Beers',
    type: 'meat'
  }
];

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
      {(value || 0).toFixed(1) + '%'}
    </Typography>
  </div>
);

class StatisticsPage extends Component {
  state = {
    stats: null,
    value: 0
  };

  handleTabClicked = (event, value) => {
    let stats = {};
    console.log('value', value);
    switch (value) {
      case 0:
        stats = calculateStats(meals);
        break;
      case 1:
        stats = calculateStats(weekmeals);
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        console.warn('unhandled value', value);
        break;
    }
    this.setState({ value, stats });
  };

  componentWillMount() {
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
