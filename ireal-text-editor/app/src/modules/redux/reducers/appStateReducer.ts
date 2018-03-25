import { AppState } from "@ireal-text-editor/models";
import { AppStateActions } from "@ireal-text-editor/redux-actions/appStateActions";

export function AppStateReducer(
  state: AppState = { loading: false },
  action: AppStateActions
): AppState {
  switch (action.type) {
    case "@APP/STATE/LOADING":
      return {
        loading: action.loading
      };
    default:
      return state;
  }
}
