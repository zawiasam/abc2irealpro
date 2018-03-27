import * as React from "react";
import { SongData } from "@ireal-text-editor/models";
import List, { ListItem, ListItemText } from "material-ui/List";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Divider } from "material-ui";

interface SongListProps {
  songs: SongData[];
  uid: string | undefined;
  getSongs: () => void;
}

interface SongListState {
  navigate: string | null;
}

class SongList extends React.Component<SongListProps> {
  state: SongListState = {
    navigate: null
  };

  componentDidMount() {
    this.props.getSongs();
  }

  componentWillReceiveProps(nextProps: Readonly<SongListProps>) {
    if (nextProps.uid && this.props.uid !== nextProps.uid) {
      this.props.getSongs();
    }
  }

  navigeteTo = (url: string) => {
    this.setState({ navigate: url });
  };

  render() {
    const { songs } = this.props;
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to={navigate} push={true} />;
    }

    if (!songs) return  null;
    const songsCount = songs.length;
    return (
      <div>
        <List component="nav">
          {songs &&
            songs.map((song, index) => {
              return (
                <>
                  <ListItem
                    button
                    key={song.id}
                    onClick={() => {
                      this.navigeteTo(`/editor/${song.id}`);
                    }}
                  >
                    <ListItemText primary={song.title} />
                  </ListItem>
                  {index !== songsCount - 1 ? <Divider />: <></>}
                </>
              );
            })}
        </List>
      </div>
    );
  }
}

export { SongList, SongListProps };
