import * as React from "react";
import { SongEditor } from "./SongEditor";
import { SongData } from "@ireal-text-editor/models";
import * as firebase from "firebase";
import "@firebase/firestore";
import { Snackbar, IconButton } from "material-ui";
import CloseIcon from "material-ui-icons/Close";
import { uuidv4 } from "@ireal-text-editor/lib";
import { SongEditorContainer } from "./SongEditorContainer";

type SnackbarType = "success" | "error";

interface IrealLinkGeneratorState {
  snackbarMessage: string;
  snackbarVisible: boolean;
  snackbarType: SnackbarType;
}

class IrealLinkGenerator extends React.Component<{}, IrealLinkGeneratorState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      snackbarMessage: "",
      snackbarVisible: false,
      snackbarType: "success"
    };
  }

  encodeLink = (songInfo: SongData) => {
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

  handleSongChange = (song: SongData) => {
    const url = this.encodeLink(song);
    url && window.open(url, "_blank");
  };

  render() {
    return (
      <div>
        <SongEditorContainer />
        <Snackbar
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={this.state.snackbarVisible}
          onClose={() => {
            this.setState({ snackbarVisible: false });
          }}
          autoHideDuration={
            this.state.snackbarType === "success" ? undefined : 6000
          }
          SnackbarContentProps={{
            style: {
              backgroundColor:
                this.state.snackbarType === "success" ? "green" : "red"
            }
          }}
          message={<span id="message-id">{this.state.snackbarMessage}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => {
                this.setState({ snackbarVisible: false });
              }}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export { IrealLinkGenerator };
