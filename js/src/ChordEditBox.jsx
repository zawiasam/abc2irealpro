import React from "react";

class ChordEditBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  clearText() {
    this.setState({
      text: ""
    });
  }

  handleChange(event) {
    this.setState({ text: event.target.value.replace(" ", "_") });
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.text);
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
