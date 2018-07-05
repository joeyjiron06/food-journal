import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LoginPage from './routes/login';
import HomePage from './routes/home';
import StatisticsPage from './routes/statistics';
import SettingsPage from './routes/settings';
import AppBar from './components/appBar';
import * as firebase from 'firebase';

const theme = createMuiTheme({});

class AuthenticatedRoute extends Component {
  render() {
    if (!firebase.user) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location }
          }}
        />
      );
    }

    return (
      <div>
        <AppBar />
        <Route {...this.props} />
      </div>
    );
  }
}

class App extends Component {
  state = {};

  componentWillMount() {
    firebase.initializeApp({
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
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
