import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";

const rootReducer = combineReducers({
  authState: AuthReducer
});


export default rootReducer
