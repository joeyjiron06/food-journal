import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import LoginPage from './login';
import HomePage from './home';
import SettingsPage from './settings';
import StatisticsPage from './statistics';
import HistoryPage from './history';
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
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <AuthenticatedRoute path="/home" component={HomePage} />
      <AuthenticatedRoute path="/statistics" component={StatisticsPage} />
      <AuthenticatedRoute path="/history" component={HistoryPage} />
      <AuthenticatedRoute path="/settings" component={SettingsPage} />
      {/* no match just redirect to login page */}
      <Route component={LoginPage} />
    </Switch>
  </Router>
);
