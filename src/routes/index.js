import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import LoginPage from './login';
import FeedsPage from './feeds';
import SettingsPage from './settings';
import UserPage from './user';
import AppBar from '../components/appBar';
import { auth } from 'firebase';

const AuthenticatedRoute = props => {
  if (!auth().user) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location }
        }}
      />
    );
  }

  return (
    <div>
      <AppBar />
      <Route {...props} />
    </div>
  );
};

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <AuthenticatedRoute path='/feeds' component={FeedsPage} />
      <AuthenticatedRoute path='/settings' component={SettingsPage} />
      <AuthenticatedRoute path='/user/:id' component={UserPage} />
      {/* no match just redirect to login page */}
      <Route component={LoginPage} />
    </Switch>
  </Router>
);
