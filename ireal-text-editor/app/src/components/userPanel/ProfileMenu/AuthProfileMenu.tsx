import * as React from "react";
import { RaisedButton } from "material-ui";
import * as firebase from 'firebase';

interface ProfileMenuAuthProps {
  photoUrl: string | null;
}

class AuthProfileMenu extends React.Component<ProfileMenuAuthProps> {
  logoutHandle = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <img
            style={{ height: "36px", width: "36px" }}
            src={this.props.photoUrl || "/default/profile/avatar.png"}
          />
        </div>
        <div>
          <RaisedButton label="Logout" onClick={this.logoutHandle} />
        </div>
      </div>
    );
  }
}

export { AuthProfileMenu };
