import React from "react";
import { render } from "react-dom";
import { ChordEditBox } from "./ChordEditBox";
import { RealLinkGenerator as LinkGenerator } from "./RealLinkGenerator";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { TextField } from "material-ui";

const styles = {
  textAlign: "center",
  display:"flex"
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
      timing: "4/4",
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
          <div style={{display: "block"}}>
            <TextField
              defaultValue={this.state.composer}
              floatingLabelText="Composer"
              onChange={event =>
                this.setState({ composer: event.target.value })
              }
            />
            <br />
            <TextField
              defaultValue={this.state.title}
              floatingLabelText="Title"
              onChange={event => this.setState({ title: event.target.value })}
            />
            <br />
            <TextField defaultValue={this.state.style} floatingLabelText="Style" />
            <br />
            <TextField defaultValue={this.state.timing} floatingLabelText="Timing" />
            <br />
            <TextField
              defaultValue={this.state.keySignature}
              floatingLabelText="Key signature"
            />
          </div>
          <div style={{width: "100%"}}>
            <ChordEditBox
              onSubmit={this.handleSongChange}
              song={this.state.song}
            />
            <div style={linkContainerStyle}>
              <LinkGenerator songInfo={this.state} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
