import * as React from "react";
import { SongEditor } from "./SongEditor";
import { SongData } from "@ireal-text-editor/models";
import * as firebase from "firebase";
import "@firebase/firestore";
import { Snackbar, IconButton } from "material-ui";
import CloseIcon from "material-ui-icons/Close";

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

  handleSongSave = (songData: SongData) => {
    const currentUser = firebase.auth().currentUser;
    const component = this;
    if (currentUser) {
      firebase
        .firestore()
        .collection(`users/${currentUser.uid}/chords`)
        .doc(songData.title)
        .set(songData)
        .then(function() {
          component.setState({
            snackbarMessage: "Document successfully written!",
            snackbarVisible: true,
            snackbarType: "success"
          });
        })
        .catch(function(error) {
          component.setState({
            snackbarMessage: `Error writing document: ${error}`,
            snackbarVisible: true,
            snackbarType: "error"
          });
        });
    } else {
      component.setState({
        snackbarMessage: `Stanger is not allowed to preform this action!`,
        snackbarVisible: true,
        snackbarType: "error"
      });
    }
  };
  render() {
    return (
      <div>
        <SongEditor
          onChange={this.handleSongChange}
          onSave={this.handleSongSave}
        />
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
