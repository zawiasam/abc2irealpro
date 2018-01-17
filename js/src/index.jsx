import React from "react";
import { render } from "react-dom";
import { ChordEditBox } from "./ChordEditBox";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <ChordEditBox onSubmit={text => console.log(text)} />
  </div>
);

render(<App />, document.getElementById("root"));
