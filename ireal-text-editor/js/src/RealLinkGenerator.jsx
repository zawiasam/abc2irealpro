import React from "react";

const propsy = {
  songInfo: {
    title: "Blues",
    composer: "Composer Unknown",
    style: "Medium Swing",
    keySignature: "C",
    transpostion: "n",
    timing: "4/4",
    song:
      "....|....|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb7...|....|F.G-.|.F,Bb.|..Eb7.|....|..G-.|..Bb.|..Eb.|....|F.G-.|...Bb|....|Eb...|..Bb.|Eb..F|G-...|F...|Bb...|Eb...|F.G-.|Dsus4...|D...|Eb..F|G-...|F...|Bb...|Eb..F|G-...|Eb...|....|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-...|Bb...|Eb7...|...F|.G-.F|.Bb..|.Eb7..|....|G-.F.|Bb...|....|....|"  
  }
};

class RealLinkGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.encodeLink = this.encodeLink.bind(this);
  }

  encodeLink() {
    const songInfo = { ...propsy.songInfo, ...this.props.songInfo };
    let header = `${songInfo.title}=${songInfo.composer}=${songInfo.style}=${
      songInfo.keySignature
    }=${songInfo.transpostion}=[T${songInfo.timing.replace("/", "")}`;
    let body =
      (songInfo.song || "").replace(/\./g, " ").replace(/\|+$/, "").replace(/\n/g, "").replace(/\r/g, "") + "Z ";

    if (songInfo.song.length > 0) {
      return "irealbook://" + encodeURIComponent(header + body);
    } else {
      return "";
    }
  }

  render() {
    const href = this.encodeLink();
    return (
      <div>
        {href !== "" ? <a href={href}>iReal songs</a> : <span>Nothing to show</span>}
      </div>
    );
  }
}

export { RealLinkGenerator };
