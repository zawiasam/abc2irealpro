import { UserInfo } from "firebase";

export interface AuthState {
  userInfo: UserInfo | null;
  isAuthorized: boolean | null;
}

export interface RootState {
  authState: AuthState;
}
export { UserInfo };
