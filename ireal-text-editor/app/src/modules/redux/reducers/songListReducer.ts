import { SongData } from "@ireal-text-editor/models";
import { SongActions } from "@ireal-text-editor/redux-actions/songActions";

export function SongListReducer(
  state: SongData[] = [],
  action: SongActions
): SongData[] {
  switch (action.type) {
    case "@APP/SONG_LIST/SUCCESS":
      return [...action.songList];
    default:
      return [...state];
  }
}
