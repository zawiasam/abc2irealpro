import { AuthState } from "@ireal-text-editor/models";
import { AuthActions } from "@ireal-text-editor/redux-actions";

export function AuthReducer(
  state: AuthState = { userInfo: null },
  action: AuthActions
): AuthState {
  switch (action.type) {
    case "@APP/LOGIN/REQUEST":
      return {
        ...state,
        ...{
          userInfo: {
            displayName: "Maćko",
            uid: "uuid",
            providerId: action.loginRequest.provider,
            email: "mail",
            phoneNumber: "000-000-000-000",
            photoURL: "http://url"
          }
        }
      };
    default:
      return state;
  }
}
