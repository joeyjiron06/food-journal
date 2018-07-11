import React, { Component } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider
} from '@material-ui/core';
import { fetchMeals } from '../../model/meal';
import './index.css';

class HistoryPage extends Component {
  state = {
    sections: null
  };

  UNSAFE_componentWillMount() {
    this.mounted = true;

    this.setState({ sections: null, isLoading: false, error: false });

    fetchMeals({ start: 0, end: Date.now(), ascending: false })
      .then(meals => {
        if (!this.mounted) {
          return;
        }

        const sections = [];
        meals.forEach(meal => {
          const date = new Date(meal.date);
          let section = sections[sections.length - 1];

          if (!section || date.getDate() !== section.date.getDate()) {
            sections.push({
              date: date,
              meals: []
            });
            section = sections[sections.length - 1];
          }

          section.meals.push(meal);
        });

        this.setState({ sections, isLoading: false });
      })
      .catch(error => {
        if (!this.mounted) {
          return;
        }

        this.setState({ sections: null, isLoading: false, error: true });
      });
  }

  UNSAFE_componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="history-page">
        <Typography variant="display1" gutterBottom>
          Meal History
        </Typography>

        <div>
          <List subheader={<li />}>
            {sections && sections.length
              ? sections.map(section => (
                  <li key={`${section.date}`}>
                    <ul>
                      <ListSubheader className="section-header">
                        {section.date.toLocaleDateString()}
                      </ListSubheader>
                      <Divider />

                      {section.meals.map(meal => (
                        <ListItem key={meal.id}>
                          <ListItemText
                            primary={meal.title}
                            secondary={meal.type}
                          />
                        </ListItem>
                      ))}
                    </ul>
                  </li>
                ))
              : null}
          </List>
        </div>
      </div>
    );
  }
}

export default HistoryPage;
