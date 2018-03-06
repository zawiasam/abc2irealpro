import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";
import { SongListReducer } from "./songListReducer";
import { NotificationReducer } from "./notificationReducer";

const rootReducer = combineReducers({
  authState: AuthReducer,
  songList: SongListReducer,
  notification: NotificationReducer
});


export default rootReducer
