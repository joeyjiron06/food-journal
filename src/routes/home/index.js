import React, { Component } from 'react';
import './index.css';
import {
  Button,
  Icon,
  Typography,
  List,
  ListItem,
  ListItemText,
  Modal,
  CircularProgress
} from '@material-ui/core';
import EditMeal from '../../components/editMeal';
import { fetchMeals } from '../../model/meal';
import { dateRangeOfToday } from '../../model/date';

class Home extends Component {
  state = {
    showAddModal: false,
    isFetching: true,
    meals: null
  };
  UNSAFE_componentWillMount() {
    this.mounted = true;

    this.setState({ isFetching: true, isError: false });

    fetchMeals(dateRangeOfToday())
      .then(meals => {
        if (!this.mounted) {
          return;
        }
        console.log('got meals', meals);
        this.setState({
          meals,
          isFetching: false
        });
      })
      .catch(error => {
        if (!this.mounted) {
          return;
        }

        this.setState({
          isFetching: false,
          isError: true
        });
        console.error('error fetching meals', error);
      });
  }

  UNSAFE_componentWillUnmount() {
    this.mounted = true;
  }

  handleAddMealClicked = () => {
    this.setState({ showAddModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showAddModal: false, editMeal: null });
  };

  handleMealClicked = meal => {
    this.setState({
      showAddModal: true,
      editMeal: meal
    });
  };

  handleMealConfirmed = meal => {
    const prevMeals = this.state.meals || [];
    const meals = prevMeals.map(m => {
      // update with new data
      if (m.id === meal.id) {
        return meal;
      }

      return m;
    });

    if (!meal.id) {
      meal.id = Date.now(); //temp id
      meals.push(meal);
    }

    this.setState({ meals, showAddModal: false });
  };
  handleRemoveMeal = meal => {
    const meals = this.state.meals.filter(m => m.id !== meal.id);
    this.setState({ meals, showAddModal: false, editMeal: null });
  };

  render() {
    const { meals, showAddModal, editMeal, isFetching } = this.state;

    return (
      <div className="home-page">
        <div className="home-page-content">
          <Typography variant="display1" gutterBottom>
            Today
          </Typography>

          {isFetching ? (
            <CircularProgress color="secondary" />
          ) : (
            <List>
              {meals && meals.length ? (
                meals.map(meal => (
                  <ListItem
                    key={meal.id}
                    onClick={() => {
                      this.handleMealClicked(meal);
                    }}
                  >
                    <ListItemText primary={meal.title} secondary={meal.type} />
                  </ListItem>
                ))
              ) : (
                <Typography>
                  You haven't added any meals today. Add some meals by clicking
                  on the button below.
                </Typography>
              )}
            </List>
          )}
        </div>

        <Modal open={showAddModal}>
          <EditMeal
            meal={editMeal}
            onConfirm={this.handleMealConfirmed}
            onCancel={this.handleCloseModal}
            onRemove={this.handleRemoveMeal}
          />
        </Modal>

        <div className="home-page-add-button-container">
          <Button variant="extendedFab" onClick={this.handleAddMealClicked}>
            <Icon style={{ marginRight: 10 }}>add</Icon>
            Add Meal
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
