import { Action, Dispatch } from "redux";
import { UserInfo, SongData } from "@ireal-text-editor/models";
import * as firebase from "firebase";

interface SongListRequest extends Action {
  type: "@APP/SONG_LIST/REQUEST";
  uid: string;
}

interface SongListSuccess extends Action {
  type: "@APP/SONG_LIST/SUCCESS";
  songList: SongData[];
}

type SongActions = SongListRequest | SongListSuccess;

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

export function fetchPosts(uid: string) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch: Dispatch<any>) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(GetSongRequest(uid));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return firebase
      .firestore()
      .collection(`users/${uid}/chords`)
      .get()
      .then(function(snap) {
        snap.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });

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
