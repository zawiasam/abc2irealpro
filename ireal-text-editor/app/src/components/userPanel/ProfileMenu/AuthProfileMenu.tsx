import * as React from "react";
import Button  from "material-ui/Button";
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
          <Button raised onClick={this.logoutHandle} >Logout</Button>
        </div>
      </div>
    );
  }
}

export { AuthProfileMenu };
