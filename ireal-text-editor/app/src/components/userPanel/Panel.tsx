import * as React from "react";
import { AuthPanel } from "./AuthPanel";
import { AnonPanel } from "./AnonPanel";

import { AuthState, RootState } from "@ireal-text-editor/models";
import { UserLogin, UserLogout } from "@ireal-text-editor/redux-actions";

import { connect, DispatchProp } from "react-redux";
import * as firebase from "firebase";
import { NotificationContainer } from "../appComponents/notification/notificationContainer";

interface PanelState extends AuthState {}
interface PanelProps extends AuthState {}

class Panel extends React.Component<PanelProps & DispatchProp<any>> {
  constructor(props: PanelProps) {
    super(props);

    let thisComponent = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        if (thisComponent.props.dispatch)
          thisComponent.props.dispatch(
            UserLogin({
              userInfo: user,
              isAuthorized: !user.isAnonymous
            })
          );
      } else {
        if (thisComponent.props.dispatch) {
          thisComponent.props.dispatch(UserLogout());
        }
      }
    });
  }

  render() {
    const user = this.props.userInfo
      ? {
          photoURL: this.props.userInfo.photoURL,
          displayName:
            this.props.userInfo.displayName || this.props.userInfo.email
        }
      : null;

    return this.props.isAuthorized != null ? (
      this.props.isAuthorized && user ? (
        <AuthPanel displayName={user.displayName} photoURL={user.photoURL} />
      ) : (
        <AnonPanel />
      )
    ) : null;
  }
}

const PanelContainer: React.SFC<PanelProps & DispatchProp<any>> = ({
  userInfo,
  isAuthorized,
  dispatch
}) => {
  return (
    <div>
    <Panel
      userInfo={userInfo}
      isAuthorized={isAuthorized}
      dispatch={dispatch}
    />
    <NotificationContainer />
    </div>
  );
};

function mapStateToProps(state: RootState, ownProps: PanelProps) {
  return {
    userInfo: state.authState.userInfo,
    isAuthorized: state.authState.isAuthorized
  };
}

function mapDispatchToProps() {}

let panel = connect(mapStateToProps)(PanelContainer);

export { panel as Panel };
