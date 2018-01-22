import * as React from "react";
import { AuthPanel } from "./AuthPanel";
import { AnonPanel } from "./AnonPanel";

interface PanelState {
  isAuthorized: boolean;
  user: firebase.UserInfo | null;
}

class Panel extends React.Component<Partial<{}>, PanelState> {
  constructor(props: Partial<{}>) {
    super(props);
    this.state = {
      isAuthorized: false,
      user: null
    };
    let thisComponent = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        thisComponent.setState({ user, isAuthorized: !user.isAnonymous });
      } else {
        thisComponent.setState({ user: null });
      }
    });
  }

  render() {
    const user = this.state.user
      ? {
          photoURL: this.state.user.photoURL,
          displayName: this.state.user.displayName || this.state.user.email
        }
      : null;

    return this.state.isAuthorized && user ? (
      <AuthPanel displayName={user.displayName} photoURL={user.photoURL} />
    ) : (
      <AnonPanel />
    );
  }
}

export { Panel };
