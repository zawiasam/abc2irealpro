import * as React from "react";
import { RaisedButton } from "material-ui";
import * as firebase from "firebase";

const panelElementStyle = {
  padding: "8px"
};

interface UserPanelProps {}
interface UserPanelState {
  user: firebase.User | undefined;
}

class UserPanel extends React.Component<UserPanelProps, UserPanelState> {
  constructor(props: UserPanelProps) {
    super(props);

    this.state = {
      user: undefined
    };

    this.loginHandle = this.loginHandle.bind(this);
    this.logoutHandle = this.logoutHandle.bind(this);
    let thisComponent = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        thisComponent.setState({ user });
      } else {
        thisComponent.setState({ user: undefined });
      }
    });
  }

  logoutHandle() {
    firebase.auth().signOut();
  }

  loginHandle() {
    let thisComponent = this;
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        // thisComponent.setState({ user: result.user });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.dir(error);
        thisComponent.setState({ user: undefined });
      });
  }

  render() {
    return (
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <div style={panelElementStyle}>
          {this.state.user
            ? `Welcome back ${this.state.user.displayName}`
            : "Welcome stanger"}
        </div>
        <div>
          {!this.state.user ? (
            <RaisedButton
              label="I don't wanna be a stranger"
              onClick={this.loginHandle}
            />
          ) : (
            <RaisedButton label="Logout" onClick={this.logoutHandle} />
          )}
        </div>
      </div>
    );
  }
}

export { UserPanel };