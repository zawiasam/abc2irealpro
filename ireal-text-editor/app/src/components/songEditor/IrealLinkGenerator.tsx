import * as React from "react";
import { SongEditor } from "./SongEditor";
import { SongData } from "@ireal-text-editor/models";
import { Snackbar, IconButton } from "material-ui";
import CloseIcon from "material-ui-icons/Close";
import { uuidv4 } from "@ireal-text-editor/lib";
import { SongEditorContainer } from "./SongEditorContainer";
import { RouteComponentProps } from "react-router";

const IrealLinkGenerator: React.SFC<RouteComponentProps<any>> = (props) => {
  let encodeLink = (songInfo: SongData) => {
    let header = [
      songInfo.title,
      songInfo.composer,
      songInfo.style,
      songInfo.keySignature,
      songInfo.transpostion,
      `[T${songInfo.measure.replace("/", "")}`
    ].join("=");

    let body =
      (songInfo.song || "")
        .replace(/\./g, " ")
        .replace(/\|+$/, "")
        .replace(/\n/g, "")
        .replace(/\r/g, "") + "Z ";

    if (songInfo.song.length > 0) {
      return "irealbook://" + encodeURIComponent(header + body);
    } else {
      return "";
    }
  };

  let handleSongChange = (song: SongData) => {
    const url = encodeLink(song);
    url && window.open(url, "_blank");
  };

  return (
    <div>
      <SongEditorContainer {...props}/>
    </div>
  );
};

export { IrealLinkGenerator };
