import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import * as firebase from "firebase";

import appConfig from "app-config";

import { IrealLinkGenerator } from "./components/songEditor/IrealLinkGenerator";
import { SongEditorContainer } from "./components/songEditor/SongEditorContainer";
import { Panel } from "./components/userPanel/Panel";
import { configureStore } from "@ireal-text-editor/redux-store";

export const store = configureStore({});
firebase.initializeApp(appConfig);


const linkContainerStyle = {
  margintop: "18px"
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Panel} />
        </div>
      </Router>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
