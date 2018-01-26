import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { render } from "react-dom";
import { SongEditor } from "./components/songEditor/SongEditor";
import { Panel } from "./components/userPanel/Panel";

import { Provider } from "react-redux";
import { configureStore } from "@ireal-text-editor/redux-store";

import appConfig from "app-config";
import * as firebase from 'firebase';

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
    this.handleSongChange = this.handleSongChange.bind(this);
  }

  encodeLink(songInfo) {
    let header = [
      songInfo.title,
      songInfo.composer,
      songInfo.style,
      songInfo.key,
      songInfo.transpostion,
      `[T${songInfo.measure.replace("/", "")}`
    ].join("=");

    let body =
      (songInfo.song || "")
        .replace(/\./g, " ")
        .replace(/\|+$/, "")
        .replace(/\n/g, "")
        .replace(/\r/g, "") + "Z ";

    if (songInfo.song.length > 0) {
      return "irealbook://" + encodeURIComponent(header + body);
    } else {
      return "";
    }
  }

  handleSongChange(song) {
    const url = this.encodeLink(song);
    url && window.open(url, "_blank");
  }

  render() {
    return (
      <div>
        <Panel />
        <SongEditor onChange={this.handleSongChange} />
      </div>
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
