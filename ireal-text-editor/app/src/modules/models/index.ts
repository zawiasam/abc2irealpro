import { UserInfo } from "firebase";

export interface AuthState {
  userInfo: UserInfo | null;
  isAuthorized: boolean | null;
}

export interface RootState {
  authState: AuthState;
}

export interface SongData {
  title: string;
  composer: string;
  style: string;
  keySignature: string;
  transpostion: string;
  measure: string;
  song: string;
}
export { UserInfo };
