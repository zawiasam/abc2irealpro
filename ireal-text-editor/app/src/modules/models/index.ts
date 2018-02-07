import { UserInfo } from "firebase";

export interface AuthState {
  userInfo: UserInfo | null;
  isAuthorized: boolean | null;
}

export interface RootState {
  authState: AuthState;
  songList: SongData[];
}

export interface SongData {
  title: string;
  composer: string;
  style: string;
  keySignature: string;
  transpostion: string;
  measure: string;
  song: string;
  id: string | null;
}

export { UserInfo };
