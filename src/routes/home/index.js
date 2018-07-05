import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './index.css';
import * as firebase from 'firebase';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Icon,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Modal
} from '@material-ui/core';
import EditMeal from '../../components/editMeal';
import { addMeal, removeMeal, fetchMeals } from '../../model/meal';
import { dateRangeOfToday } from '../../model/date';

class Home extends Component {
  state = {
    showAddModal: false,
    meals: null
  };
  componentWillMount() {
    this.mounted = true;
    fetchMeals(dateRangeOfToday())
      .then(meals => {
        if (!this.mounted) {
          return;
        }
        console.log('got meals', meals);
        this.setState({
          meals
        });
      })
      .catch(error => {
        if (!this.mounted) {
          return;
        }
        console.error('error fetching meals', error);
      });
  }

  componentWillUnmount() {
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

  handleMealAdded = meal => {
    meal.id = meal.id || Date.now();
    const prevMeals = this.state.meals || [];
    const meals = [...prevMeals, meal];
    this.setState({ meals, showAddModal: false });
    addMeal(meal);
  };
  handleRemoveMeal = meal => {
    const meals = this.state.meals.filter(m => m.id !== meal.id);
    this.setState({ meals, showAddModal: false, editMeal: null });
    removeMeal(meal);
  };

  render() {
    const { meals, showAddModal, editMeal } = this.state;

    return (
      <div className="home-page">
        <div className="home-page-content">
          <Typography variant="display1" gutterBottom>
            Today
          </Typography>

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
                You haven't added any meals today. Add some meals by clicking on
                the button below.
              </Typography>
            )}
          </List>
        </div>

        <Modal open={showAddModal}>
          <EditMeal
            meal={editMeal}
            onConfirm={this.handleMealAdded}
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
