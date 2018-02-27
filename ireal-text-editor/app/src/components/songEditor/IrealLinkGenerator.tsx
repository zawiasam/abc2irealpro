import * as React from "react";
import { SongEditor } from "./SongEditor";
import { SongData } from "@ireal-text-editor/models";
import * as firebase from "firebase";
import "@firebase/firestore";
import { Snackbar, IconButton } from "material-ui";
import CloseIcon from "material-ui-icons/Close";
import { uuidv4 } from "@ireal-text-editor/lib";
import { SongEditorContainer } from "./SongEditorContainer";

class IrealLinkGenerator extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      snackbarMessage: "",
      snackbarVisible: false,
      snackbarType: "success"
    };
  }

  public encodeLink = (songInfo: SongData) => {
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

  public handleSongChange = (song: SongData) => {
    const url = this.encodeLink(song);
    url && window.open(url, "_blank");
  };

  public render() {
    return (
      <div>
        <SongEditorContainer />
      </div>
    );
  }
}

export { IrealLinkGenerator };
