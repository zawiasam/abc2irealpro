import { UserInfo } from "firebase";

export interface AuthState {
  userInfo: UserInfo | null;
  isAuthorized: boolean | null;
}

export type NotificationType = "success" | "failure" | "warning";

export interface NotificationModel {
  message: string | undefined;
  type: NotificationType;
  autoclose: boolean;
}

export interface AppState {
  loading: boolean;
}

export interface RootState {
  appState: AppState;
  authState: AuthState;
  songList: SongData[];
  notification: NotificationModel;
  selectedSong: SongData;
}

export interface SongData {
  title: string;
  composer: string;
  style: string;
  keySignature: string;
  transpostion: string;
  measure: string;
  song: string;
  id: string;
}

export { UserInfo };
