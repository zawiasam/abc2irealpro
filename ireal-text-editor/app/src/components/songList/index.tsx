import * as React from "react";

import { SongList, SongListProps } from "./SongList";
import { RootState } from "@ireal-text-editor/models";
import { GetSongRequest } from "@ireal-text-editor/redux-actions";
import { connect, DispatchProp } from "react-redux";
import { Dispatch } from "redux";

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: SongListProps) {
  return {
    getSongs: () => {
      dispatch(GetSongRequest('ayzprW9RqaV0dcBl8bV1xNKMp7C2'));
    }
  };
}

function mapStateToProps(state: RootState, ownProps: SongListProps) {
  return {
    songs: state.songList
  };
}

const SongListContainer = connect(mapStateToProps, mapDispatchToProps)(
  SongList
);

export { SongListContainer as SongList };
