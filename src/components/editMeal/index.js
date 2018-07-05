import React, { Component } from "react";
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
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Select,
  MenuItem
} from "@material-ui/core";
import "./index.css";

class EditMeal extends Component {
  state = {};

  componentWillMount() {
    // copy the passed in meal for editing, or create a new one
    this.state.meal = { ...this.props.meal } || {};
  }

  handleTitleChanged = event => {
    const title = event.target.value;
    const meal = { ...this.state.meal, title };
    console.log("meal", meal);
    this.setState({ meal });
  };
  handleMealTypeChanged = event => {
    const type = event.target.value;
    const meal = { ...this.state.meal, type };
    console.log("meal", meal);

    this.setState({ meal });
  };
  handleQuantityChanged = event => {
    const quantity = event.target.value;
    const meal = { ...this.state.meal, quantity };
    this.setState({ meal });
  };

  render() {
    const { onAdd, onCancel } = this.props;
    const { meal } = this.state;
    const addButtonEnabled = !!meal.type && !!meal.title;
    console.log("addButtonEnabled", addButtonEnabled, meal);
    return (
      <Dialog open={true}>
        <DialogTitle>Add Meal</DialogTitle>

        <DialogContent>
          <div>
            <TextField
              label="Name of meal"
              value={meal.title || ""}
              onChange={this.handleTitleChanged}
              margin="normal"
              helperText="required"
            />
          </div>

          <form className="edit-meal-type-form" autoComplete="off">
            <FormControl
              style={{
                minWidth: 120
              }}
            >
              <InputLabel htmlFor="edit-meal-type">Meal Type</InputLabel>
              <Select
                value={meal.type || ""}
                onChange={this.handleMealTypeChanged}
                input={<Input name="Meal Type" id="edit-meal-type" />}
              >
                <MenuItem value={"junk"}>Junk</MenuItem>
                <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
                <MenuItem value={"vegan"}>Vegan</MenuItem>
              </Select>

              <FormHelperText>required</FormHelperText>
            </FormControl>
          </form>

          <TextField
            label="Quantity"
            value={meal.quantity || ""}
            onChange={this.handleQuantityChanged}
            helperText="optional"
            margin="normal"
            style={{
              maxWidth: 80
            }}
          />

          <DialogActions>
            <Button color="primary" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={() => {
                onAdd(meal);
              }}
              disabled={!addButtonEnabled}
            >
              Add
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

export default EditMeal;
