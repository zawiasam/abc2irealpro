import React from "react";
import { render } from "react-dom";
import { SongEditor } from "./components/songEditor/SongEditor";
import { UserPanel } from "./components/userPanel/userPanel";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
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
        <UserPanel onUserLoggedOn={auth => console.dir(auth)} />
        <SongEditor onChange={this.handleSongChange} />
      </div>
    );
  }
}

render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById("root"));
