import React from "react";
import { render } from "react-dom";
import { ChordEditBox } from "./ChordEditBox";
import { RealLinkGenerator as LinkGenerator } from "./RealLinkGenerator";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const linkContainerStyle = {
  margintop: "18px"
}

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
      <MuiThemeProvider>
        <div style={styles}>
          <ChordEditBox onSubmit={this.handleSongChange} song={this.state.song} />
          <div style={linkContainerStyle}>
            <LinkGenerator song={this.state.song} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
