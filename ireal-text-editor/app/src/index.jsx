import React from "react";
import { render } from "react-dom";
import { ChordEditBox } from "./ChordEditBox";
import { RealLinkGenerator as LinkGenerator } from "./RealLinkGenerator";
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
      timing: "4/4",
      song:
        "....|....|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb7...|....|F.G-.|.F,Bb.|..Eb7.|....|..G-.|..Bb.|..Eb.|....|F.G-.|...Bb|....|Eb...|..Bb.|Eb..F|G-...|F...|Bb...|Eb...|F.G-.|Dsus4...|D...|Eb..F|G-...|F...|Bb...|Eb..F|G-...|Eb...|....|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-...|Bb...|Eb7...|...F|.G-.F|.Bb..|.Eb7..|....|G-.F.|Bb...|....|....|",
      openLink: false
    };
    this.handleSongChange = this.handleSongChange.bind(this);
  }

  handleSongChange(text) {
    this.setState({ song: text, openLink: true });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles}>
          <div style={{ display: "block" }}>
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
            <TextField
              defaultValue={this.state.style}
              floatingLabelText="Style"
            />
            <br />
            <TextField
              defaultValue={this.state.timing}
              floatingLabelText="Timing"
            />
            <br />
            <TextField
              defaultValue={this.state.keySignature}
              floatingLabelText="Key signature"
            />
          </div>
          <div style={{ width: "100%" }}>
            <ChordEditBox
              onSubmit={this.handleSongChange}
              song={this.state.song}
            />
            <pre>x - repeat one prev. chord</pre>
            <pre>% - repeat two prev. chords</pre>
            <pre>n - N.C.</pre>
            <LinkGenerator songInfo={this.state}>
              {url => {
                this.state.openLink && url && window.open(url, "_blank");
                return null;
              }}
            </LinkGenerator>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));