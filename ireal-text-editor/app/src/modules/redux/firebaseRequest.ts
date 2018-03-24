import * as firebase from "firebase/app";
import "firebase/firestore";

export function fbDocument<T>() {
  return {
    fetch: (path: string, success: (result: T) => void, error: () => void) => {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        firebase
          .firestore()
          .doc(path)
          .get()
          .then(d => {
            success(d.data() as T);
          });
      }
    }
  };
}
