import { SongData } from "@ireal-text-editor/models";
import { SongActions } from "@ireal-text-editor/redux-actions";

const defaultSongDataState: SongData = {
  title: '',
  composer: '',
  style: '',
  keySignature: '',
  transpostion: '',
  measure: '',
  song: '',
  id: '',
}

export function SongReducer(
  state: SongData = defaultSongDataState,
  action: SongActions
): SongData {
  switch (action.type) {
    case "@APP/FETCH_SONG/SUCCESS":
      return action.song;
    default:
      return state;
  }
}
