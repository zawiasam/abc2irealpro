import { Action, Dispatch } from "redux";
import { UserInfo, SongData, RootState } from "@ireal-text-editor/models";
import { uuidv4 } from "@ireal-text-editor/lib";

import * as firebase from "firebase/app";
import "firebase/firestore";

import {
  ShowNotificationCreate,
  GeneralFailNotificationCreate
} from "./notificationActions";
import { fb } from "../firebaseRequest";
import { selectUserId } from "../selectors/authSelector";
import { UserLogout } from "./authActions";
interface FetchSongRequest extends Action {
  type: "@APP/FETCH_SONG/REQUEST";
  uid: string;
  songId: string;
}

interface FetchSongSuccess extends Action {
  type: "@APP/FETCH_SONG/SUCCESS";
  song: SongData;
}

interface SongListRequest extends Action {
  type: "@APP/SONG_LIST/REQUEST";
  uid: string;
}

interface SongListSuccess extends Action {
  type: "@APP/SONG_LIST/SUCCESS";
  songList: SongData[];
}

interface SongSaveRequest extends Action {
  type: "@APP/SONG_STORE/REQUEST";
  songData: SongData;
}

interface SongSaveSuccess extends Action {
  type: "@APP/SONG_STORE/SUCCESS";
}

interface SongClearAction extends Action {
  type: "@APP/SONG_CLEAR";
}

type SongActions =
  | SongListRequest
  | SongListSuccess
  | SongSaveRequest
  | SongSaveSuccess
  | FetchSongRequest
  | FetchSongSuccess
  | SongClearAction;

function GetFetchSongRequest(uid: string, songId: string): FetchSongRequest {
  return {
    type: "@APP/FETCH_SONG/REQUEST",
    uid: uid,
    songId: songId
  };
}

function GetFetchSongSuccess(song: SongData): FetchSongSuccess {
  return {
    type: "@APP/FETCH_SONG/SUCCESS",
    song: song
  };
}

function GetSongListRequest(uid: string): SongListRequest {
  return {
    type: "@APP/SONG_LIST/REQUEST",
    uid: uid
  };
}

function GetSongListSuccess(songList: SongData[]): SongListSuccess {
  return {
    type: "@APP/SONG_LIST/SUCCESS",
    songList: songList || []
  };
}

function GetSongSaveRequest(songData: SongData): SongSaveRequest {
  return {
    type: "@APP/SONG_STORE/REQUEST",
    songData: { ...songData }
  };
}

function GetSongSaveSucess(): SongSaveSuccess {
  return {
    type: "@APP/SONG_STORE/SUCCESS"
  };
}

export function SongClear(): SongClearAction {
  return {
    type: "@APP/SONG_CLEAR"
  };
}

function getUserId(state: RootState, dispatch: Dispatch<any>): string | null {
  const userId = selectUserId(state);
  if (!userId) {
    dispatch(UserLogout());
  }

  return userId;
}

export const saveSongAsync = (songData: SongData) => (
  dispatch: Dispatch<any>,
  getState: () => RootState
) => {
  const userId = getUserId(getState(), dispatch);
  if (!userId) {
    return;
  }
  dispatch(GetSongSaveRequest(songData));

  fb<SongData>(dispatch)
    .collection(`users/${userId}/chords`)
    .put(
      { body: songData, id: songData.id },
      () => {
        dispatch(GetSongSaveSucess());
        dispatch(
          ShowNotificationCreate({
            autoclose: false,
            type: "success",
            message: "Document saved correctly"
          })
        );
      },
      () => dispatch(GeneralFailNotificationCreate())
    );
};

const getDefaultSongValue = () => {
  return {
    title: "New song",
    composer: "Unknown Composer",
    style: "Medium Swing",
    keySignature: "C",
    transpostion: "n",
    measure: "4/4",
    id: uuidv4(),
    song: ""
  };
};

export function fetchSongAsync(songId: string) {
  return (dispatch: Dispatch<any>, getState: () => RootState) => {
    const userId = getUserId(getState(), dispatch);
    if (!userId) {
      return;
    }

    dispatch(GetFetchSongRequest(userId, songId));
    if (songId) {
      let path = `users/${userId}/chords/${songId}`;
      fb<SongData>(dispatch)
        .document(path)
        .get(
          result => {
            dispatch(GetFetchSongSuccess(result));
          },
          () => dispatch(GeneralFailNotificationCreate())
        );
    } else {
      dispatch(GetFetchSongSuccess(getDefaultSongValue()));
    }
  };
}

export const fetchSongsAsync = () => (
  dispatch: Dispatch<any>,
  getState: () => RootState
) => {
  const userId = getUserId(getState(), dispatch);
  if (!userId) {
    return;
  }

  dispatch(GetSongListRequest(userId));
  fb<SongData>(dispatch)
    .collection(`users/${userId}/chords`)
    .get(
      result => {
        dispatch(GetSongListSuccess(result));
      },
      () => dispatch(GeneralFailNotificationCreate())
    );
};

export { GetSongListRequest, SongActions };
