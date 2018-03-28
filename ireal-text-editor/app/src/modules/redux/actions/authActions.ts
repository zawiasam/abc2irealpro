import { Action, Dispatch } from "redux";
import { UserInfo, RootState } from "@ireal-text-editor/models";
import { fbInit } from "../firebaseRequest";
import { LoadingStateChange } from "@ireal-text-editor/redux-actions/appStateActions";

interface LoginRequest {
  userInfo: UserInfo;
  isAuthorized: boolean;
}

interface LogoutRequest {
  isAuthorized: boolean;
}

interface LoginAction extends Action {
  type: "@APP/LOGIN/REQUEST";
  loginRequest: LoginRequest;
}

interface LogoutAction extends Action {
  type: "@APP/LOGOUT/REQUEST";
  logoutRequest: LogoutRequest;
}

interface OnAuthStateChanged extends Action {
  type: "@APP/AUTHSTATE/CHANGED/ATTACH";
}
type AuthActions = LoginAction | LogoutAction | OnAuthStateChanged;

function UserLogin(loginRequest: LoginRequest): LoginAction {
  return {
    loginRequest,
    type: "@APP/LOGIN/REQUEST"
  };
}

function UserLogout(): LogoutAction {
  return {
    type: "@APP/LOGOUT/REQUEST",
    logoutRequest: { isAuthorized: false }
  };
}

// function AttachOnAuthStateChanged(): OnAuthStateChanged {
//   return {
//     type: "@APP/AUTHSTATE/CHANGED/ATTACH"
//   };
// }

function AttachOnAuthStateChanged() {
  return (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(LoadingStateChange(true));
    fbInit(user => {
      if (user) {
        dispatch(
          UserLogin({
            userInfo: user,
            isAuthorized: !user.isAnonymous
          })
        );
      } else {
        dispatch(UserLogout());
      }
      dispatch(LoadingStateChange(false));
    });
  };
}
export { UserLogin, UserLogout, AttachOnAuthStateChanged, AuthActions };
