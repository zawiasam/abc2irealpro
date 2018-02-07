import { Action } from "redux";
import { UserInfo } from "@ireal-text-editor/models";

interface SongListAction extends Action {
  type: "@APP/SONG_LIST/REQUEST";
}

type SongActions = SongListAction;

function GetSongList(): SongListAction {
  return {
    type: "@APP/SONG_LIST/REQUEST"
  };
}

export { GetSongList, SongActions };
