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
  InputLabel,
  Input,
  Select,
  MenuItem,
  withMobileDialog,
  IconButton,
  Icon
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { updateMeal, removeMeal } from '../api/foodJournal';
import moment from 'moment';

class EditMeal extends Component {
  state = {
    now: moment(new Date()).valueOf(),
    yesterday: moment(new Date())
      .subtract(1, 'day')
      .valueOf(),
    twoDaysAgo: moment(new Date())
      .subtract(2, 'day')
      .valueOf()
  };

  UNSAFE_componentWillMount() {
    // copy the passed in meal for editing, or create a new one
    this.setState({
      meal: { ...this.props.meal }
    });

    console.log('state', this.state);
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
  handleMealDateChanged = event => {
    const date = event.target.value;
    const meal = { ...this.state.meal, date };
    this.setState({ meal });
  };

  handleConfirm = async () => {
    const { meal } = this.state;

    await updateMeal(meal);
    this.props.onConfirm(meal);
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
    removeMeal(this.state.meal);
    this.props.onRemove(this.props.meal);
  };

  render() {
    const { onCancel, fullScreen, classes } = this.props;
    const {
      meal,
      showRemoveConfirmDialog,
      now,
      yesterday,
      twoDaysAgo
    } = this.state;
    const addButtonEnabled = !!meal.type && !!meal.title;

    return (
      <Dialog open={true} fullScreen={fullScreen}>
        <DialogTitle>Edit Meal</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Edit your meal below. All fields are required.
          </DialogContentText>

          <TextField
            fullWidth={true}
            label='Name of meal'
            value={meal.title || ''}
            onChange={this.handleTitleChanged}
            margin='normal'
          />

          <IconButton
            style={{
              position: 'absolute',
              top: 20,
              right: 20
            }}
            color='secondary'
            onClick={this.handleOnRemoveClicked}
          >
            <Icon>delete</Icon>
          </IconButton>

          <FormControl className={classes.form}>
            <InputLabel htmlFor='edit-meal-type'>Meal Type</InputLabel>
            <Select
              value={meal.type || ''}
              onChange={this.handleMealTypeChanged}
              input={<Input name='Meal Type' id='edit-meal-type' />}
            >
              <MenuItem value={'junk'}>Junk food</MenuItem>
              <MenuItem value={'meat'}>Meat</MenuItem>
              <MenuItem value={'vegan'}>Vegan</MenuItem>
              <MenuItem value={'vegetarian'}>Vegetarian</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.form}>
            <InputLabel htmlFor='edit-meal-date'>Date</InputLabel>
            <Select
              value={meal.date || ''}
              onChange={this.handleMealDateChanged}
              input={<Input name='Date' id='edit-meal-date' />}
            >
              <MenuItem value={now}>Today</MenuItem>
              <MenuItem value={yesterday}>Yesterday</MenuItem>
              <MenuItem value={twoDaysAgo}>2 days ago</MenuItem>
              {/* TODO: other. allow user to type in some other date */}
              <MenuItem value={this.props.meal.date}>
                {new Date(this.props.meal.date).toLocaleDateString()}
              </MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button color='primary' onClick={onCancel}>
            Cancel
          </Button>
          <Button
            color='primary'
            onClick={this.handleConfirm}
            disabled={!addButtonEnabled}
          >
            Confirm
          </Button>
        </DialogActions>

        {showRemoveConfirmDialog ? (
          <Dialog open={true}>
            <DialogTitle>{`Remove ${meal.title}?`}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete {meal.title}?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCancelRemove} color='primary'>
                Cancel
              </Button>
              <Button onClick={this.handleConfirmRemove} color='secondary'>
                Remove
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}
      </Dialog>
    );
  }
}

const styles = theme => ({
  root: {},
  form: {
    display: 'inline-block',
    marginRight: 20,
    marginTop: 20,
    minWidth: 120
  }
});

export default withMobileDialog({ breakpoint: 'xs' })(
  withStyles(styles)(EditMeal)
);
