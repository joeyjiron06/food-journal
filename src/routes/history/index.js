import React, { Component } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider,
  Modal,
  CircularProgress
} from '@material-ui/core';
import { fetchMeals } from '../../model/meal';
import EditMeal from '../../components/editMeal';
import './index.css';

class HistoryPage extends Component {
  state = {
    sections: null
  };

  handleMealClicked = meal => () => {
    this.setState({
      editMeal: meal
    });
  };

  UNSAFE_componentWillMount() {
    this.mounted = true;

    this.setState({ sections: null, isLoading: true, error: false });

    fetchMeals({ start: 0, end: Date.now(), ascending: false })
      .then(meals => {
        if (!this.mounted) {
          return;
        }

        this.setMeals(meals);
        this.setState({ isLoading: false });
      })
      .catch(error => {
        if (!this.mounted) {
          return;
        }

        this.setState({ sections: null, isLoading: false, error: true });
      });
  }

  handleCloseModal = () => {
    this.setState({ editMeal: null });
  };

  handleMealConfirmed = meal => {
    const sections = (this.state.sections || []).map(section => {
      section.meals = section.meals.map(m => {
        // update with new data
        if (m.id === meal.id) {
          return meal;
        }

        return m;
      });
      return section;
    });

    this.setState({ sections, editMeal: null });
  };

  handleRemoveMeal = meal => {
    const sections = (this.state.sections || []).map(section => {
      section.meals = section.meals.filter(m => m.id !== meal.id);
      return section;
    });

    this.setState({ sections, editMeal: null });
  };

  setMeals(meals) {
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

    this.setState({ sections });
  }

  UNSAFE_componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { sections, editMeal, isLoading } = this.state;
    const showModal = !!editMeal;

    return (
      <div className='history-page'>
        <Typography variant='display1' gutterBottom>
          Meal History
        </Typography>

        <div>
          {isLoading ? (
            <CircularProgress color='secondary' />
          ) : (
            <List subheader={<li />}>
              {sections && sections.length
                ? sections.map(section => (
                    <li key={`${section.date}`}>
                      <ul>
                        <ListSubheader className='section-header'>
                          {section.date.toLocaleDateString()}
                        </ListSubheader>
                        <Divider />

                        {section.meals.map(meal => (
                          <ListItem
                            key={meal.id}
                            onClick={this.handleMealClicked(meal)}
                          >
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
          )}
        </div>

        <Modal open={showModal}>
          <EditMeal
            meal={editMeal}
            onRemove={this.handleRemoveMeal}
            onConfirm={this.handleMealConfirmed}
            onCancel={this.handleCloseModal}
          />
        </Modal>
      </div>
    );
  }
}

export default HistoryPage;
