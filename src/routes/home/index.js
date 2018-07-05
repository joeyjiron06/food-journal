import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import "./index.css";
import * as firebase from "firebase";
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
} from "@material-ui/core";
import EditMeal from "../../components/editMeal";

class Home extends Component {
  state = {
    showAddModal: false,
    meals: [
      {
        id: 0,
        title: "Oatmeal",
        type: "vegan"
      },
      {
        id: 1,
        title: "PB&J",
        type: "vegan"
      },
      {
        id: 2,
        title: "Soda",
        type: "junk"
      },
      {
        id: 3,
        title: "2 Beers",
        type: "alcohol"
      },
      {
        id: 4,
        title: "Oatmeal",
        type: "vegan"
      },
      {
        id: 5,
        title: "PB&J",
        type: "vegan"
      },
      {
        id: 6,
        title: "Soda",
        type: "junk"
      },
      {
        id: 7,
        title: "2 Beers",
        type: "alcohol"
      }
    ]
  };
  componentWillMount() {}

  componentWillUnmount() {}

  handleAddMealClicked = () => {
    this.setState({ showAddModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showAddModal: false });
  };

  handleMealAdded = meal => {
    const meals = [...this.state.meals, meal];
    this.setState({ meals, showAddModal: false });
  };

  render() {
    const { meals, showAddModal } = this.state;

    return (
      <div className="home-page">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <Icon>menu</Icon>
            </IconButton>
            <div>Food Journal</div>
          </Toolbar>
        </AppBar>

        <div className="home-page-content">
          <Typography variant="display1" gutterBottom>
            Today
          </Typography>

          <List>
            {meals.map(meal => (
              <ListItem key={meal.id}>
                <ListItemText primary={meal.title} secondary={meal.type} />
              </ListItem>
            ))}
          </List>
        </div>

        <Modal open={showAddModal}>
          <EditMeal
            onConfirm={this.handleMealAdded}
            onCancel={this.handleCloseModal}
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
