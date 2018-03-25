import { Action } from "redux";
import { UserInfo } from "@ireal-text-editor/models";

interface LoadingStateAction extends Action {
  type: "@APP/STATE/LOADING";
  loading: boolean;
}


type AppStateActions = LoadingStateAction;

function LoadingStateChange(loading: boolean): LoadingStateAction {
  return {
    type: "@APP/STATE/LOADING",
    loading: loading
  };
}

export { AppStateActions, LoadingStateChange };
