import { createStore, applyMiddleware } from "redux";
import rootReducer from "@ireal-text-editor/redux-reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

function configureStore(initialState: any) {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export { configureStore };
