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

const meals = [
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
  }
];

class Home extends Component {
  componentWillMount() {}

  componentWillUnmount() {}

  handleAddMealClicked = () => {
    console.log("add meal clicked");
  };

  render() {
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

        <Modal open={true}>
          <EditMeal />
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
