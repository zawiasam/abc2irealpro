import { UserInfo } from "firebase";

export interface AuthState {
  userInfo: UserInfo | null;
}
