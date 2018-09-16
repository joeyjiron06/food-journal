import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { initializeApp } from 'firebase';
import Routes from './routes';

const theme = createMuiTheme({});

class App extends Component {
  state = {};

  componentDidMount() {
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
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default App;
