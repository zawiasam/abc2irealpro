import * as React from "react";
import { AnonProfileMenu } from "./ProfileMenu/AnonProfileMenu";

const panelElementStyle = {
  padding: "8px"
};

interface AnonPanelProps {}
interface AnonPanelState {
  user: firebase.User | undefined;
}

class AnonPanel extends React.Component<AnonPanelProps, AnonPanelState> {
  constructor(props: AnonPanelProps) {
    super(props);

    this.state = {
      user: undefined
    };
  }

  render() {
    return (
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <div style={panelElementStyle}>Welcome stanger</div>
        <AnonProfileMenu />
      </div>
    );
  }
}

export { AnonPanel };
