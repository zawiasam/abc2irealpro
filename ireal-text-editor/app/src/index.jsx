import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import * as firebase from "firebase";

import appConfig from "app-config";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { IrealLinkGenerator } from "./components/songEditor/IrealLinkGenerator";
import { Panel } from "./components/userPanel/Panel";

import { configureStore } from "@ireal-text-editor/redux-store";

firebase.initializeApp(appConfig);
const store = configureStore();

const styles = {
  textAlign: "center",
  display: "flex"
};

const linkContainerStyle = {
  margintop: "18px"
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Panel />
          <Route exact path="/" component={IrealLinkGenerator} />
        </div>
      </Router>
    );
  }
}

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
