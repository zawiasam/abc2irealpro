import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";
import { SongListReducer } from "./songListReducer";
import { NotificationReducer } from "./notificationReducer";
import { SongReducer } from "./songReducer";

const rootReducer = combineReducers({
  authState: AuthReducer,
  songList: SongListReducer,
  notification: NotificationReducer,
  selectedSong: SongReducer,
});


export default rootReducer
