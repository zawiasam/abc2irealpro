import React from "react";
import { render } from "react-dom";
import { ChordEditBox } from "./ChordEditBox";
import { RealLinkGenerator as LinkGenerator } from "./RealLinkGenerator";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song:
        "....|....|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb7...|....|F.G-.|.F,Bb.|..Eb7.|....|..G-.|..Bb.|..Eb.|....|F.G-.|...Bb|....|Eb...|..Bb.|Eb..F|G-...|F...|Bb...|Eb...|F.G-.|Dsus4...|D...|Eb..F|G-...|F...|Bb...|Eb..F|G-...|Eb...|....|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-...|Bb...|Eb7...|...F|.G-.F|.Bb..|.Eb7..|....|G-.F.|Bb...|....|....|"
    };
    this.handleSongChange = this.handleSongChange.bind(this);
  }

  handleSongChange(text) {
    this.setState({ song: text });
  }

  render() {
    return (
      <div style={styles}>
        <ChordEditBox onSubmit={this.handleSongChange} song={this.state.song} />
        <LinkGenerator song={this.state.song} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
