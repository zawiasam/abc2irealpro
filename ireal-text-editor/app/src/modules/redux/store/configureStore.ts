import { createStore, applyMiddleware } from "redux";
import rootReducer from "@ireal-text-editor/redux-reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

function configureStore(initialState: any) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}

export { configureStore }