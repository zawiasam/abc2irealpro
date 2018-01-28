import * as React from "react";
import { SongEditor } from "./SongEditor";
import { SongData } from "@ireal-text-editor/models";

const IrealLinkGenerator: React.SFC = () => {
  function encodeLink(songInfo: SongData) {
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
  }

  function handleSongChange(song: SongData) {
    const url = encodeLink(song);
    url && window.open(url, "_blank");
  }

  return <SongEditor onChange={handleSongChange} />;
};

export { IrealLinkGenerator };
