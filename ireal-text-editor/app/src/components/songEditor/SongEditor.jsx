import React from "react";
import { ChordEditBox } from "./ChordsEdit";
import { SongInfo } from "./SongInfoEdit";
import { TextField } from "material-ui";

const styles = {
  textAlign: "center",
  display: "flex"
};

const linkContainerStyle = {
  margintop: "18px"
};

class SongEditor extends React.Component {
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
  }

  handleSongInfoChange(songInfo) {
    this.setState(songInfo);
  }

  handleSongChange(text) {
    if (this.props.onChange) {
      this.props.onChange({...this.state, song: text});
    }
  }

  render() {
    return (
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
    );
  }
}

export { SongEditor }