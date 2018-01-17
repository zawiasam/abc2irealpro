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
      song: ""
    };
    this.handleSongChange = this.handleSongChange.bind(this);
  }

  handleSongChange(text) {
    this.setState({ song: text });
  }

  render() {
    return (
      <div style={styles}>
        <ChordEditBox onSubmit={this.handleSongChange} />
        <LinkGenerator song={this.state.song} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
