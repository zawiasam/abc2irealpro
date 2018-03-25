import * as firebase from "firebase/app";
import "firebase/firestore";

export interface Document<T> {
  body: T;
}

export interface DocumentWithId<T> extends Document<T> {
  id: string;
}

export function fb<T>() {
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
            })
            .catch(() => {
              error();
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
            })
            .catch(() => {
              error();
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
            })
            .catch(() => {
              error();
            });
        }
      };
    }
  };
}
