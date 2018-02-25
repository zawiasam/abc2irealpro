import { SongData } from "@ireal-text-editor/models";
import { SongActions } from "@ireal-text-editor/redux-actions";
import { uuidv4 } from "@ireal-text-editor/lib";

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
          id: uuidv4()
        }
      ];
    default:
      return [...state];
  }
}
