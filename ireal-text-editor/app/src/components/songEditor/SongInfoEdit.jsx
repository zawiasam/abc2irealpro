import React from "react";
import { TextField, RaisedButton } from "material-ui";

class SongInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chordsText: this.props.song || "",
      ...this.props.defaultValue
    };

    this.doChanged = this.doChanged.bind(this);
  }

  doChanged(value) {
    const state = { ...this.state, ...value };
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
          onChange={event => {
            this.doChanged({ composer: event.target.value });
          }}
        />
        <br />
        <TextField
          defaultValue={defaultValue.title || ""}
          fullWidth={true}
          floatingLabelText="Title"
          onChange={event => {
            this.doChanged({ title: event.target.value });
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
