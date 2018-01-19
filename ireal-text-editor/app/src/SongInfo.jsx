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
          floatingLabelText="Composer"
          onChange={event => {
            this.doChanged({ composer: event.target.value });
          }}
        />
        <br />
        <TextField
          defaultValue={defaultValue.title || ""}
          floatingLabelText="Title"
          onChange={event => {
            this.doChanged({ title: event.target.value });
          }}
        />
        <br />
        <TextField value={defaultValue.style || ""} floatingLabelText="Style" />
        <br />
        <TextField
          value={defaultValue.measure || ""}
          floatingLabelText="Measure"
        />
        <br />
        <TextField value={defaultValue.key || ""} floatingLabelText="Key" />
      </div>
    );
  }
}

export { SongInfo };
