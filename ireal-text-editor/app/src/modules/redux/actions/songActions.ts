import { Action, Dispatch } from "redux";
import { UserInfo, SongData } from "@ireal-text-editor/models";
import * as firebase from "firebase";
import "@firebase/firestore";
import { ShowNotificationCreate } from "./notificationActions";

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

type SongActions =
  | SongListRequest
  | SongListSuccess
  | SongSaveRequest
  | SongSaveSuccess;

function GetSongRequest(uid: string): SongListRequest {
  return {
    type: "@APP/SONG_LIST/REQUEST",
    uid: uid
  };
}

function GetSongSuccess(songList: SongData[]): SongListSuccess {
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
export function saveSong(dispatch: Dispatch<any>) {
  return function(songData: SongData) {
    dispatch(GetSongSaveRequest(songData));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      firebase
        .firestore()
        .collection(`users/${currentUser.uid}/chords`)
        .doc(songData.id)
        .set(songData)
        .then(function() {
          dispatch(GetSongSaveSucess());
          dispatch(
            ShowNotificationCreate({
              autoclose: false,
              type: "success",
              message: "Document saved correctly"
            })
          );
        });
    } else {
      dispatch(
        ShowNotificationCreate({
          autoclose: false,
          type: "failure",
          message: "Stanger is not allowed to preform this action!"
        })
      );
    }
  };
}

export function fetchSongs(dispatch: Dispatch<any>) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function() {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      dispatch(GetSongRequest(currentUser.uid));
      // The function called by the thunk middleware can return a value,
      // that is passed on as the return value of the dispatch method.

      // In this case, we return a promise to wait for.
      // This is not required by thunk middleware, but it is convenient for us.

      firebase
        .firestore()
        .collection(`users/${currentUser.uid}/chords`)
        .get()
        .then(function(snap) {
          let songList: SongData[] = [];
          snap.forEach(function(doc) {
            // console.log(doc.id, " => ", doc.data());
            songList.push(doc.data() as SongData);
          });
          dispatch(GetSongSuccess(songList));
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }

    // fetch(`https://www.reddit.com/r/${subreddit}.json`)
    //   .then(
    //     response => response.json(),
    //     // Do not use catch, because that will also catch
    //     // any errors in the dispatch and resulting render,
    //     // causing a loop of 'Unexpected batch number' errors.
    //     // https://github.com/facebook/react/issues/6895
    //     error => console.log("An error occurred.", error)
    //   )
    //   .then(json =>
    //     // We can dispatch many times!
    //     // Here, we update the app state with the results of the API call.

    //     dispatch(GetSongSuccess(json))
    //   );
  };
}

export { GetSongRequest, SongActions };
