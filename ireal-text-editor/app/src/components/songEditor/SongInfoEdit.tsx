import * as React from "react";
import { TextField, RaisedButton } from "material-ui";

interface SongInfoProps {
  defaultValue: SongInfoState;
  onChange: (value: SongInfoState) => void;
}

interface SongInfoState {
  composer: string;
  title: string;
  style: string;
  measure: string;
  key: string;
  transpostion: string;
}

class SongInfo extends React.Component<SongInfoProps> {
  constructor(props: SongInfoProps) {
    super(props);
    this.state = {
      ...this.props.defaultValue
    };

    this.doChanged = this.doChanged.bind(this);
  }

  doChanged(value: Partial<SongInfoState>) {
    const state = { ...this.state, ...value } as SongInfoState;
    if (this.props.onChange) {
      this.props.onChange(state);
    }

    this.setState(value);
  }

  render() {
    const defaultValue = this.props.defaultValue;
    return (
      <div style={{ display: "block" }}>
        <TextField
          defaultValue={defaultValue.composer || ""}
          fullWidth={true}
          floatingLabelText="Composer"
          onChange={(event, value: string) => {
            this.doChanged({ composer: value });
          }}
        />
        <br />
        <TextField
          defaultValue={defaultValue.title || ""}
          fullWidth={true}
          floatingLabelText="Title"
          onChange={(event, value: string) => {
            this.doChanged({ title: value });
          }}
        />
        <br />
        <TextField
          value={defaultValue.style || ""}
          fullWidth={true}
          floatingLabelText="Style"
        />
        <br />
        <TextField
          value={defaultValue.measure || ""}
          fullWidth={true}
          floatingLabelText="Measure"
        />
        <br />
        <TextField
          value={defaultValue.key || ""}
          fullWidth={true}
          floatingLabelText="Key"
        />
      </div>
    );
  }
}

export { SongInfo };
