import { Action } from "redux";
import { UserInfo } from "@ireal-text-editor/models";

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

type AuthActions = LoginAction | LogoutAction;

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

export { UserLogin, UserLogout, AuthActions };
