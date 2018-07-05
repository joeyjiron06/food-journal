import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
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

const meals = [
  {
    id: 0,
    title: 'Oatmeal',
    type: 'vegetarian'
  },
  {
    id: 1,
    title: 'PB&J',
    type: 'vegan'
  },
  {
    id: 2,
    title: 'Soda',
    type: 'junk food'
  },
  {
    id: 3,
    title: '2 Beers',
    type: 'junk food'
  },
  {
    id: 4,
    title: 'Oatmeal',
    type: 'vegan'
  },
  {
    id: 5,
    title: 'PB&J',
    type: 'vegan'
  },
  {
    id: 6,
    title: 'Soda',
    type: 'junk'
  },
  {
    id: 7,
    title: '2 Beers',
    type: 'alcohol'
  }
];

const Statistic = ({ title, value }) => (
  <div className="stats-page-stat">
    <Typography className="state-page-state-title">{title}</Typography>
    <div className="stats-page-percentage-container">
      <div
        className="stats-page-percentage-bar"
        style={{
          width: value + '%'
        }}
      />
    </div>
    <Typography style={{ display: 'inline' }}>{value + '%'}</Typography>
  </div>
);

class StatisticsPage extends Component {
  state = {
    stats: null
  };

  componentWillMount() {
    this.setState({
      stats: calculateStats(meals)
    });
  }

  render() {
    const stats = this.state.stats || {};

    return (
      <div className="stats-page">
        <Typography variant="display1" gutterBottom>
          Statistics
        </Typography>

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
