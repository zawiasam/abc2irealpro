import React from "react";
import { RaisedButton } from "material-ui";

const panelElementStyle = {
  padding: "8px"
};

class UserPanel extends React.Component {
  getInitialState() {
    return {
      isAuthorized: false,
      userName: null
    };
  }

  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  loginHandle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.dir(result);
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
      });
  }

  render() {
    return (
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <div style={panelElementStyle}>
          {this.state.isAuthorized
            ? `Welcome ${this.state.userName}`
            : "Welcome stanger"}{" "}
        </div>
        <div>
          {!this.state.isAuthorized ? (
            <RaisedButton
              label="I don't wanna be a stranger"
              onClick={this.loginHandle}
            />
          ): (<span>Welcome back</span>)}
        </div>
      </div>
    );
  }
}

export { UserPanel };
