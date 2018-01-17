import React from "react";

const propsy = {
  title: "Blues",
  composer: "Composer Unknown",
  style: "Medium Swing",
  keySignature: "C",
  transpostion: "n",
  timing: "4/4",
  song:
    "....|....|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb7...|....|F.G-.|.F,Bb.|..Eb7.|....|..G-.|..Bb.|..Eb.|....|F.G-.|...Bb|....|Eb...|..Bb.|Eb..F|G-...|F...|Bb...|Eb...|F.G-.|Dsus4...|D...|Eb..F|G-...|F...|Bb...|Eb..F|G-...|Eb...|....|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-...|Bb...|Eb7...|...F|.G-.F|.Bb..|.Eb7..|....|G-.F.|Bb...|....|....|"
};

class RealLinkGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.encodeLink = this.encodeLink.bind(this);
  }

  encodeLink() {
    const songInfo = { ...propsy, ...this.props };
    let header = `${songInfo.title}=${songInfo.composer}=${songInfo.style}=${
      songInfo.keySignature
    }=${songInfo.transpostion}=[T${songInfo.timing.replace("/", "")}`;
    let body =
      (this.props.song || "").replace(/\|+$/, "") + "Z ".replace(".", " ");

    return "irealbook://" + encodeURIComponent(header + body);
  }

  render() {
    return (
      <div>
        <a href={this.encodeLink()}>import</a>
      </div>
    );
  }
}

export { RealLinkGenerator };
