import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LoginPage from "./routes/login";
import HomePage from "./routes/home";
import * as firebase from "firebase";

const theme = createMuiTheme({});

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyASrQ26OQZNaY9NKmEtOL1O8Uw_SdlAcNg",
      authDomain: "food-journal-6eb44.firebaseapp.com",
      databaseURL: "https://food-journal-6eb44.firebaseio.com",
      projectId: "food-journal-6eb44",
      storageBucket: "",
      messagingSenderId: "1056680813971"
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
