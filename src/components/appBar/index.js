import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Button,
  Typography
} from '@material-ui/core';
import { auth } from 'firebase';
import { withRouter } from 'react-router';

class MyAppBar extends Component {
  state = {
    openMenu: false
  };

  closeMenu() {
    this.setState({ openMenu: false });
  }
  openMenu() {
    this.setState({ openMenu: true });
  }
  navigateTo(path) {
    this.closeMenu();
    this.props.history.replace(path);
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => {
              this.openMenu();
            }}
          >
            <Icon>menu</Icon>
          </IconButton>
          <div>Food Journal</div>
        </Toolbar>

        <Drawer
          open={this.state.openMenu}
          onClose={() => {
            this.closeMenu();
          }}
        >
          <div tabIndex={0} role="button" onClick={() => {}}>
            {auth().user ? (
              <List component="nav">
                <ListItem dense button>
                  <Avatar alt="Remy Sharp" src={auth().user.photoURL} />
                  <ListItemText primary={auth().user.displayName} />
                </ListItem>

                <ListItem
                  button
                  onClick={() => {
                    this.navigateTo('/home');
                  }}
                >
                  <ListItemIcon>
                    <Icon>today</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Today" />
                </ListItem>

                <ListItem
                  button
                  onClick={() => {
                    this.navigateTo('/statistics');
                  }}
                >
                  <ListItemIcon>
                    <Icon>bar_chart</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Statistics" />
                </ListItem>

                <ListItem
                  button
                  onClick={() => {
                    this.navigateTo('/settings');
                  }}
                >
                  <ListItemIcon>
                    <Icon>settings</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
              </List>
            ) : (
              <div
                style={{
                  padding: 20
                }}
              >
                <Typography gutterBottom>You must be logged in.</Typography>
                <Button
                  onClick={() => {
                    this.navigateTo('/');
                  }}
                  variant="raised"
                  color="primary"
                >
                  Login
                </Button>
              </div>
            )}
          </div>
        </Drawer>
      </AppBar>
    );
  }
}

export default withRouter(MyAppBar);
