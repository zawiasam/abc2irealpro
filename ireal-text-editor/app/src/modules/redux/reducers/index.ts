import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";

const rootReducer = combineReducers({
  userInfo: AuthReducer
});


export default rootReducer
