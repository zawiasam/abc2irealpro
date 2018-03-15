import * as React from "react";
import { SongEditor, SongEditorProps } from "./SongEditor";
import { RootState, SongData } from "@ireal-text-editor/models";
import {
  fetchSongs,
  saveSong,
  fetchSong,
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
    onChange: saveSong(dispatch),
    onSave: saveSong(dispatch),
    onSongDownload: (songId: string) => {
      dispatch(SongClear());
      return fetchSong(dispatch)(songId);
    }
  };
}

export const SongEditorContainer = connect(mapStateToProps, mapDispatchToProps)(
  SongEditor
);
