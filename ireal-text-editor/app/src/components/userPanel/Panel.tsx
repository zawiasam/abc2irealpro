import * as React from "react";
import { AuthPanel } from "./AuthPanel";
import { AnonPanel } from "./AnonPanel";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthState, RootState } from "@ireal-text-editor/models";
import {
  UserLogin,
  UserLogout,
  AttachOnAuthStateChanged
} from "@ireal-text-editor/redux-actions/authActions";

import { connect, DispatchProp, Dispatch } from "react-redux";
import * as firebase from "firebase";
import { NotificationContainer } from "../appComponents/notification/notificationContainer";
import { ProgressIndicatorContainer } from "../appComponents/ProgressIndicator/ProgressIndicatorContainer";
import { Route } from "react-router";
import { SongEditorContainer } from "../songEditor/SongEditorContainer";
import { SongListContainer } from "../songList";

interface PanelState extends AuthState {}
interface PanelProps extends AuthState {
  authorizedContent: React.ReactNode;
  onAuthStateChanged: () => void;
}
interface PanelContainerProps extends AuthState {
  onAuthStateChanged: () => void;
}

class Panel extends React.Component<PanelProps> {
  constructor(props: PanelProps) {
    super(props);
  }
  componentDidMount() {
    this.props.onAuthStateChanged();
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
        <>
          <AuthPanel displayName={user.displayName} photoURL={user.photoURL} />
          {this.props.authorizedContent}
        </>
      ) : (
        <AnonPanel />
      )
    ) : null;
  }
}

const PanelContainer: React.SFC<PanelContainerProps> = ({
  userInfo,
  isAuthorized,
  onAuthStateChanged
}) => {
  return (
    <div>
      <ProgressIndicatorContainer />
      <Panel
        userInfo={userInfo}
        isAuthorized={isAuthorized}
        authorizedContent={
          <Switch>
            <Route path="/editor/:id?" component={SongEditorContainer} />
            <Route exact path="/songList" component={SongListContainer} />
          </Switch>
        }
        onAuthStateChanged={onAuthStateChanged}
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

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    onAuthStateChanged: () => dispatch(AttachOnAuthStateChanged())
  };
}

let panel = connect(mapStateToProps, mapDispatchToProps)(PanelContainer);

export { panel as Panel };
