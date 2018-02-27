import { SongData } from "@ireal-text-editor/models";
import { SongActions } from "@ireal-text-editor/redux-actions";
import { uuidv4 } from "@ireal-text-editor/lib";

export function SongReducer(
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
