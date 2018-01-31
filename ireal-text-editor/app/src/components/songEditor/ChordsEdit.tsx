import * as React from "react";
import { TextField } from "material-ui";
import Button from "material-ui/Button";

interface ChordEditBoxProps {
  song: string;
  onSubmit: (value: string) => void;
  onSave: (value: string) => void;
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

  handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;

    this.setState({ chordsText: value });
  }

  handleSubmit() {
    this.onSubmit(this.state.chordsText);
  }

  handleSave = () => {
    this.onSave(this.state.chordsText);
  };

  onSave(text: string) {
    if (this.props.onSave) {
      this.props.onSave(text);
    }
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
            label="Chords"
            multiline
            rows="4"
            defaultValue="Default Value"
            margin="normal"
            onChange={this.handleChange}
            fullWidth={true}
            InputProps={{style: textFieldSytle}}
            value={this.state.chordsText}
          />
        </div>
        <div>
          <Button
            raised
            color="primary"
            onClick={this.handleSave}
            style={style}
          >
            save
          </Button>
          <Button
            raised
            color="secondary"
            onClick={this.handleSubmit}
            style={style}
          >
            generate song
          </Button>
          <Button raised onClick={this.handlePrettify} style={style}>
            prettify a little
          </Button>
          <Button raised onClick={this.clearText} style={style}>
            clear
          </Button>
        </div>
      </div>
    );
  }
}

export { ChordEditBox };
