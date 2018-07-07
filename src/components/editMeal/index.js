import React, { Component } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Select,
  MenuItem
} from '@material-ui/core';
import './index.css';

class EditMeal extends Component {
  state = {};

  UNSAFE_componentWillMount() {
    // copy the passed in meal for editing, or create a new one
    this.setState({
      meal: { ...this.props.meal },
      isEditing: !!this.props.meal
    });
  }

  handleTitleChanged = event => {
    const title = event.target.value;
    const meal = { ...this.state.meal, title };
    this.setState({ meal });
  };
  handleMealTypeChanged = event => {
    const type = event.target.value;
    const meal = { ...this.state.meal, type };
    this.setState({ meal });
  };
  handleOnRemoveClicked = () => {
    this.setState({
      showRemoveConfirmDialog: true
    });
  };

  handleCancelRemove = () => {
    this.setState({
      showRemoveConfirmDialog: false
    });
  };
  handleConfirmRemove = () => {
    this.setState({
      showRemoveConfirmDialog: false
    });
    this.props.onRemove(this.props.meal);
  };

  render() {
    const { onConfirm, onCancel } = this.props;
    const { meal, isEditing, showRemoveConfirmDialog } = this.state;
    const addButtonEnabled = !!meal.type && !!meal.title;
    return (
      <Dialog open={true}>
        <DialogTitle>{isEditing ? 'Edit Meal' : 'Add Meal'}</DialogTitle>

        <DialogContent>
          <div>
            <TextField
              label="Name of meal"
              value={meal.title || ''}
              onChange={this.handleTitleChanged}
              margin="normal"
              helperText="required"
            />
          </div>

          {isEditing ? (
            <Button
              style={{
                position: 'absolute',
                top: 20,
                right: 20
              }}
              color="secondary"
              onClick={this.handleOnRemoveClicked}
            >
              Remove
            </Button>
          ) : null}

          <form className="edit-meal-type-form" autoComplete="off">
            <FormControl
              style={{
                minWidth: 120
              }}
            >
              <InputLabel htmlFor="edit-meal-type">Meal Type</InputLabel>
              <Select
                value={meal.type || ''}
                onChange={this.handleMealTypeChanged}
                input={<Input name="Meal Type" id="edit-meal-type" />}
              >
                <MenuItem value={'junk'}>Junk food</MenuItem>
                <MenuItem value={'meat'}>Meat</MenuItem>
                <MenuItem value={'vegan'}>Vegan</MenuItem>
                <MenuItem value={'vegetarian'}>Vegetarian</MenuItem>
              </Select>

              <FormHelperText>required</FormHelperText>
            </FormControl>
          </form>

          <DialogActions>
            <Button color="primary" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              color="primary"
              onClick={() => {
                onConfirm(meal);
              }}
              disabled={!addButtonEnabled}
            >
              {isEditing ? 'Confirm' : 'Add'}
            </Button>
          </DialogActions>
        </DialogContent>

        {showRemoveConfirmDialog ? (
          <Dialog open={true}>
            <DialogTitle>{`Remove ${meal.title}?`}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete {meal.title}?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCancelRemove} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleConfirmRemove} color="secondary">
                Remove
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}
      </Dialog>
    );
  }
}

export default EditMeal;
