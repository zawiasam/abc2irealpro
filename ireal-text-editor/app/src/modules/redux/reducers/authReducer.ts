import { AuthState } from "@ireal-text-editor/models";
import { AuthActions } from "@ireal-text-editor/redux-actions/authActions";

export function AuthReducer(
  state: AuthState = { userInfo: null, isAuthorized: null },
  action: AuthActions
): AuthState {
  switch (action.type) {
    case "@APP/LOGIN/REQUEST":
      return {
        ...state,
        ...action.loginRequest
        }
    case "@APP/LOGOUT/REQUEST": {
      return {
        ...state,
        isAuthorized: action.logoutRequest.isAuthorized
      }
    }
    default:
      return state;
  }
}
