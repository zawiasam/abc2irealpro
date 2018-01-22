import * as React from "react";
import { TextField, RaisedButton } from "material-ui";

interface ChordEditBoxProps {
  song: string;
  onSubmit: (value: string) => void;
}

interface ChordEditBoxState {
  chordsText: string;
}

class ChordEditBox extends React.Component<
  ChordEditBoxProps,
  ChordEditBoxState
> {
  constructor(props: ChordEditBoxProps) {
    super(props);
    this.state = {
      chordsText: this.props.song || ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePrettify = this.handlePrettify.bind(this);
    this.clearText = this.clearText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  clearText() {
    const emptySong = "";
    this.setState({
      chordsText: emptySong
    });
  }

  formatValue(item: string) {
    return item
      .replace(" ", ".")
      .replace(/\n/g, "")
      .replace(/\r/g, "")
      .replace(/([^\|]+\|[^\|]+\|[^\|]+\|[^\|]+\|)/g, (match, p1) => {
        return match + "\n";
      });
  }

  handlePrettify() {
    const valueFormatted = this.formatValue(this.state.chordsText);
    this.setState({ chordsText: valueFormatted });
  }

  handleChange(event: React.FormEvent<{}>, newValue: string) {
    const value = newValue;

    this.setState({ chordsText: value });
  }

  handleSubmit() {
    this.onSubmit(this.state.chordsText);
  }

  onSubmit(text: string) {
    if (this.props.onSubmit) {
      this.props.onSubmit(text);
    }
  }

  render() {
    const style = {
      margin: 12
    };
    const textFieldSytle = {
      fontFamily:
        '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace'
    };

    return (
      <div>
        <div>
          <TextField
            id="chords"
            floatingLabelText="Chords"
            multiLine={true}
            rows={2}
            rowsMax={10}
            value={this.state.chordsText}
            onChange={this.handleChange}
            style={textFieldSytle}
            fullWidth={true}
          />
        </div>
        <div>
          <RaisedButton
            onClick={this.handlePrettify}
            style={style}
            label="prettify a little"
          />
          <RaisedButton
            onClick={this.handleSubmit}
            style={style}
            label="generate song"
          />
          <RaisedButton onClick={this.clearText} style={style} label="clear" />
        </div>
      </div>
    );
  }
}

export { ChordEditBox };