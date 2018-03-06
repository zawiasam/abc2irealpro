import * as React from "react";
import { ChordEditBox } from "./ChordsEdit";
import { SongInfo } from "./SongInfoEdit";
import { TextField } from "material-ui";
import { SongData } from "@ireal-text-editor/models";

const styles = {
  textAlign: "center",
  display: "flex"
};

const linkContainerStyle = {
  margintop: "18px"
};

interface SongEditorState extends SongData {}
export interface SongEditorProps {
  defaultValue: SongData;
  songId: string | undefined;
  onChange: (value: SongData) => void;
  onSave: (value: SongData) => void;
  onSongDownload: (songId: string) => void;
}

class SongEditor extends React.Component<SongEditorProps, SongEditorState> {
  constructor(props: SongEditorProps) {
    super(props);

    this.state = { ...props.defaultValue };
    this.handleSongChange = this.handleSongChange.bind(this);
    this.handleSongInfoChange = this.handleSongInfoChange.bind(this);

    if (props.onSongDownload) {
      props.onSongDownload(props.songId || '');
    }
  }

  componentWillReceiveProps(nextProps: SongEditorProps) {
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.state = { ...nextProps.defaultValue };
    } else if (nextProps.songId !== this.props.songId || !nextProps.songId) {
      this.props.onSongDownload(nextProps.songId || '');
    }
  }

  handleSongInfoChange(songInfo: Partial<SongEditorState>) {
    this.setState(songInfo as SongEditorState);
  }

  handleSongChange(text: string) {
    if (this.props.onChange) {
      this.props.onChange({ ...this.state, song: text });
    }
  }

  handleSongSave = (text: string) => {
    if (this.props.onSave) {
      this.props.onSave({ ...this.state, song: text });
    }
  };

  render() {
    console.log("render");
    const defaultSongData = { ...this.state };
    return (
      <div style={styles}>
        <SongInfo
          defaultValue={{
            title: defaultSongData.title,
            composer: defaultSongData.composer,
            style: defaultSongData.style,
            keySignature: defaultSongData.keySignature,
            transpostion: defaultSongData.transpostion,
            measure: defaultSongData.measure
          }}
          onChange={this.handleSongInfoChange}
        />
        <div style={{ width: "100%" }}>
          <ChordEditBox
            onSubmit={this.handleSongChange}
            onSave={this.handleSongSave}
            song={defaultSongData.song}
          />
          <pre>x - repeat one prev. chord</pre>
          <pre>% - repeat two prev. chords</pre>
          <pre>n - N.C.</pre>
          <pre>, - seperate chords</pre>
        </div>
      </div>
    );
  }
}

export { SongEditor };
