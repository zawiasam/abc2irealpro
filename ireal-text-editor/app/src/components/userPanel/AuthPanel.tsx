import * as React from "react";
import { AuthProfileMenu } from "./ProfileMenu/AuthProfileMenu";
import { AuthMenu } from "./ActionMenu/AuthMenu";

const panelElementStyle = { paddingRight: "8px" };

interface AuthPanelProps {
  photoURL: string | null;
  displayName: string | null;
}

class AuthPanel extends React.Component<AuthPanelProps> {
  constructor(props: AuthPanelProps) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <AuthMenu />
        <div style={{ flexGrow: 1 }} />
        <div style={panelElementStyle}>
          Nice to see you
          <br />
          {this.props.displayName || ""}
        </div>
        <AuthProfileMenu photoUrl={this.props.photoURL} />
      </div>
    );
  }
}

export { AuthPanel };
