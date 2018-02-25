import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";
import { SongReducer } from "./songReducer";
import { NotificationReducer } from "./notificationReducer";

const rootReducer = combineReducers({
  authState: AuthReducer,
  songList: SongReducer,
  notification: NotificationReducer
});


export default rootReducer
