import React from "react";
import { render } from "react-dom";
import { ChordEditBox } from "./ChordEditBox";
import { SongInfo } from "./SongInfo";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { TextField } from "material-ui";

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
    this.state = {
      title: "My song",
      composer: "Unknown Composer",
      style: "Medium Swing",
      keySignature: "C",
      transpostion: "n",
      measure: "4/4",
      song:
        "....|....|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb7...|....|F.G-.|.F,Bb.|..Eb7.|....|..G-.|..Bb.|..Eb.|....|F.G-.|...Bb|....|Eb...|..Bb.|Eb..F|G-...|F...|Bb...|Eb...|F.G-.|Dsus4...|D...|Eb..F|G-...|F...|Bb...|Eb..F|G-...|Eb...|....|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-...|Bb...|Eb7...|...F|.G-.F|.Bb..|.Eb7..|....|G-.F.|Bb...|....|....|"
    };
    this.handleSongChange = this.handleSongChange.bind(this);
    this.handleSongInfoChange = this.handleSongInfoChange.bind(this);
    this.encodeLink = this.encodeLink.bind(this);
  }

  handleSongInfoChange(songInfo) {
    this.setState(songInfo);
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

  handleSongChange(text) {
    const url = this.encodeLink(this.state);
    url && window.open(url, "_blank");
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles}>
          <SongInfo
            defaultValue={{
              title: "My song",
              composer: "Unknown Composer",
              style: "Medium Swing",
              key: "C",
              transpostion: "n",
              measure: "4/4"
            }}
            onChange={this.handleSongInfoChange}
          />
          <div style={{ width: "100%" }}>
            <ChordEditBox
              onSubmit={this.handleSongChange}
              song={this.state.song}
            />
            <pre>x - repeat one prev. chord</pre>
            <pre>% - repeat two prev. chords</pre>
            <pre>n - N.C.</pre>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
