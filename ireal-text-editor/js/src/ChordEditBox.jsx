import React from "react";
import { TextField, RaisedButton } from "material-ui";

class ChordEditBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.song || ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearText = this.clearText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  clearText() {
    const emptySong = "";
    this.setState({
      text: emptySong
    });
    this.onSubmit(emptySong);
  }

  handleChange(event) {
    this.setState({ text: event.target.value.replace(" ", ".") });
  }

  handleSubmit() {
    this.onSubmit(this.state.text);
  }

  onSubmit(text) {
    if (this.props.onSubmit) {
      this.props.onSubmit(text);
    }
  }

  render() {
    const style = {
      margin: 12
    };
    const textFieldSytle = {
      fontFamily: '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace'
    }

    return (
      <div>
        <div>
          <TextField
            id="chords"
            floatingLabelText="Chords"
            multiLine={true}
            rows={2}
            rowsMax={10}
            value={this.state.text}
            onChange={this.handleChange}
            style={textFieldSytle}
            fullWidth={true}
          />
        </div>
        <div>
          <RaisedButton
            onClick={this.handleSubmit}
            style={style}
            label="generate link"
          />
          <RaisedButton onClick={this.clearText} style={style} label="clear" />
        </div>
      </div>
    );
  }
}

export { ChordEditBox };
