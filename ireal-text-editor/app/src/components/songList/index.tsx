import * as React from "react";

import { SongList, SongListProps } from "./SongList";
import { RootState } from "@ireal-text-editor/models";
import {
  GetSongListRequest,
  fetchSongsAsync
} from "@ireal-text-editor/redux-actions/songActions";
import { connect, DispatchProp } from "react-redux";
import { Dispatch } from "redux";

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: SongListProps) {
  return {
    getSongs: () => dispatch(fetchSongsAsync())
  };
}

function mapStateToProps(state: RootState, ownProps: SongListProps) {
  let uid: string | undefined = undefined;
  if (state.authState.userInfo) {
    uid = state.authState.userInfo.uid;
  }
  return {
    songs: state.songList,
    uid: uid
  };
}

const SongListContainer = connect(mapStateToProps, mapDispatchToProps)(
  SongList
);

export { SongListContainer as SongList };
