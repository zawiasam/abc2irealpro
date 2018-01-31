import * as React from "react";
import { SongEditor } from "./SongEditor";
import { SongData } from "@ireal-text-editor/models";
import * as firebase from "firebase";
import "@firebase/firestore";

class IrealLinkGenerator extends React.Component {
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
    if (currentUser) {
      firebase
        .firestore()
        .collection(`users/${currentUser.uid}/chords`)
        .doc(songData.title)
        .set(songData)
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  };
  render() {
    return (
      <SongEditor
        onChange={this.handleSongChange}
        onSave={this.handleSongSave}
      />
    );
  }
}

export { IrealLinkGenerator };
