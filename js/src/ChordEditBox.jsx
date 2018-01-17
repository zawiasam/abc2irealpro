import React from "react";

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
    this.setState({ text: event.target.value.replace(" ", "_") });
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
    return (
      <div>
        <div>
          <textarea
            cols="40"
            rows="5"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button onClick={this.handleSubmit}>submit</button>
          <button onClick={this.clearText}>clear</button>
        </div>
      </div>
    );
  }
}

export { ChordEditBox };
