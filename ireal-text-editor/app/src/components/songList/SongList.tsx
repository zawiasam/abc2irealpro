import * as React from "react";
import { SongData } from "@ireal-text-editor/models";

interface SongListProps {
  songs: SongData[];
  getSongs: () => void;
}

class SongList extends React.Component<SongListProps> {
  componentDidMount() {
    this.props.getSongs();
  }

  render() {
    const { songs } = this.props;

    return (
      <div>
        <ul>
          {songs &&
            songs.map(song => {
              return <li>{song.title}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export { SongList, SongListProps };
