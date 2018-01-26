import * as React from "react";
import { AnonProfileMenu } from "./ProfileMenu/AnonProfileMenu";

const panelElementStyle = {
  padding: "8px"
};

interface AnonPanelProps {}

class AnonPanel extends React.Component<AnonPanelProps> {
  constructor(props: AnonPanelProps) {
    super(props);

    this.state = {
      user: undefined
    };
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={panelElementStyle}>Welcome stanger</div>
        <AnonProfileMenu />
      </div>
    );
  }
}

export { AnonPanel };
