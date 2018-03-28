import appConfig from "app-config";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Dispatch } from "redux";
import { LoadingStateChange } from "@ireal-text-editor/redux-actions/appStateActions";

export interface Document<T> {
  body: T;
}

export interface DocumentWithId<T> extends Document<T> {
  id: string;
}

export function fbInit(userChanged: (user: firebase.User | null) => void) {
  firebase.initializeApp(appConfig);  
  firebase.auth().onAuthStateChanged(userChanged);
}

export function fb<T>(dispatch: Dispatch<any>) {
  dispatch(LoadingStateChange(true));
  return {
    document: (path: string) => {
      return {
        get: (success: (result: T) => void, error: () => void) => {
          firebase
            .firestore()
            .doc(path)
            .get()
            .then(d => {
              success(d.data() as T);
              dispatch(LoadingStateChange(false));
            })
            .catch(() => {
              error();
              dispatch(LoadingStateChange(false));
            });
        }
      };
    },
    collection: (path: string) => {
      return {
        get: (success: (result: T[]) => void, error: () => void) => {
          firebase
            .firestore()
            .collection(path)
            .get()
            .then(function(snap) {
              let collection: T[] = [];
              snap.forEach(function(doc) {
                collection.push(doc.data() as T);
              });
              success(collection);
              dispatch(LoadingStateChange(false));
            })
            .catch(() => {
              error();
              dispatch(LoadingStateChange(false));
            });
        },

        put: (
          document: DocumentWithId<T>,
          success: () => void,
          error: () => void
        ) => {
          const { id, body } = document;
          if (id === null) {
            throw "Null argument exception";
          }

          firebase
            .firestore()
            .collection(path)
            .doc(id)
            .set(body)
            .then(function() {
              success();
              dispatch(LoadingStateChange(false));
            })
            .catch(() => {
              error();
              dispatch(LoadingStateChange(false));
            });
        }
      };
    }
  };
}
