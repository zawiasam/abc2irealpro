import * as React from "react";
import { AuthPanel } from "./AuthPanel";
import { AnonPanel } from "./AnonPanel";

import { AuthState } from "@ireal-text-editor/models";
import { createLogin } from "@ireal-text-editor/redux-actions";

import { connect, DispatchProp } from "react-redux";
import * as firebase from 'firebase';

interface PanelState extends AuthState {
  isAuthorized: boolean | null;
}
interface PanelProps extends AuthState {}

class Panel extends React.Component<
  PanelProps & DispatchProp<any>,
  PanelState
> {
  constructor(props: PanelProps) {
    super(props);
    this.state = {
      isAuthorized: null,
      userInfo: null
    };
    let thisComponent = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        if (thisComponent.props.dispatch)
          thisComponent.props.dispatch(
            createLogin({
              provider: ""
            })
          );
        thisComponent.setState({
          userInfo: user,
          isAuthorized: !user.isAnonymous
        });
      } else {
        thisComponent.setState({ userInfo: null, isAuthorized: false });
      }
    });
  }

  render() {
    const user = this.state.userInfo
      ? {
          photoURL: this.state.userInfo.photoURL,
          displayName:
            this.state.userInfo.displayName || this.state.userInfo.email
        }
      : null;

    return  (this.state.isAuthorized != null) ?  this.state.isAuthorized && user ? (
      <AuthPanel displayName={user.displayName} photoURL={user.photoURL} />
    ) : (
      <AnonPanel />
    ) : null;
  }
}

const PanelContainer: React.SFC<PanelProps & DispatchProp<any>> = ({ userInfo, dispatch }) => {
  return <Panel userInfo={userInfo} dispatch={dispatch}/>;
};

function mapStateToProps(state: AuthState, ownProps: PanelProps) {
  return {
    userInfo: state.userInfo
  };
}

function mapDispatchToProps() {}

let panel = connect(mapStateToProps)(PanelContainer);

export { panel as Panel };
