import * as React from "react";
import { SongData } from "@ireal-text-editor/models";
import { Link } from "react-router-dom";

interface SongListProps {
  songs: SongData[];
  uid: string | undefined;
  getSongs: () => void;
}

class SongList extends React.Component<SongListProps> {
  componentDidMount() {
    this.props.getSongs();
  }

  componentWillReceiveProps(nextProps: Readonly<SongListProps>) {
    if (nextProps.uid && this.props.uid !== nextProps.uid) {
      this.props.getSongs();
    }
  }

  render() {
    const { songs } = this.props;

    return (
      <div>
        <ul>
          {songs &&
            songs.map(song => {
              return <li key={song.id}><Link to={`/editor/${song.id}`}>{song.title}</Link> </li>;
            })}
        </ul>
      </div>
    );
  }
}

export { SongList, SongListProps };
