import { Action } from "redux";

interface LoginRequest {
  provider: string;
}

interface LoginAction extends Action {
  type: "@APP/LOGIN/REQUEST";
  loginRequest: LoginRequest;
}

type AuthActions = LoginAction;

function createLogin(loginRequest: LoginRequest): LoginAction {
  return {
    loginRequest,
    type: "@APP/LOGIN/REQUEST"
  };
}


export {createLogin, AuthActions }