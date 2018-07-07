import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LoginPage from './routes/login';
import HomePage from './routes/home';
import SettingsPage from './routes/settings';
import StatisticsPage from './routes/statistics';
import AppBar from './components/appBar';
import { auth, initializeApp } from 'firebase';

const theme = createMuiTheme({});

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

class App extends Component {
  state = {};

  UNSAFE_componentWillMount() {
    initializeApp({
      apiKey: 'AIzaSyASrQ26OQZNaY9NKmEtOL1O8Uw_SdlAcNg',
      authDomain: 'food-journal-6eb44.firebaseapp.com',
      databaseURL: 'https://food-journal-6eb44.firebaseio.com',
      projectId: 'food-journal-6eb44',
      storageBucket: '',
      messagingSenderId: '1056680813971'
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <AuthenticatedRoute path="/home" component={HomePage} />
            <AuthenticatedRoute path="/statistics" component={StatisticsPage} />
            <AuthenticatedRoute path="/settings" component={SettingsPage} />
            {/* no match just redirect to login page */}
            <Route component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
