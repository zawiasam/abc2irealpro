import * as React from "react";
import { SongEditor, SongEditorProps } from "./SongEditor";
import { RootState, SongData } from "@ireal-text-editor/models";
import {
  fetchSongsAsync,
  saveSongAsync,
  fetchSongAsync,
  SongClear
} from "@ireal-text-editor/redux-actions";
import { DispatchProp, connect, Dispatch } from "react-redux";
import { RouteComponentProps } from "react-router";

function mapStateToProps(state: RootState, ownProps: RouteComponentProps<any>) {
  console.log("map: ", ownProps.match.params);
  return {
    defaultValue: state.selectedSong,
    songId: ownProps.match.params.id
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    onChange: (songData: SongData) => dispatch(saveSongAsync(songData)),
    onSave: (songData: SongData) => dispatch(saveSongAsync(songData)),
    onSongDownload: (songId: string) => {
      dispatch(SongClear());
      dispatch(fetchSongAsync(songId));
    }
  };
}

export const SongEditorContainer = connect(mapStateToProps, mapDispatchToProps)(
  SongEditor
);
