import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";
import { SongReducer } from "./songReducer";

const rootReducer = combineReducers({
  authState: AuthReducer,
  songList: SongReducer
});


export default rootReducer
