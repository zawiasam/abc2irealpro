import { SongData } from "@ireal-text-editor/models";
import { SongActions } from "@ireal-text-editor/redux-actions";

export function SongReducer(
  state: SongData[] = [],
  action: SongActions
): SongData[] {
  switch (action.type) {
    case "@APP/SONG_LIST/REQUEST":
      return [
        {
          composer: "Maciej",
          title: "Hit",
          keySignature: "C",
          measure: "4/4",
          song: "",
          style: "style",
          transpostion: "n",
          id: null
        }
      ];
    default:
      return [...state];
  }
}
