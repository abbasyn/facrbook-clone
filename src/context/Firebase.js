import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAoA7w8oq2T_oJBNu2fzHbzyTruEAtEY9c",
  authDomain: "facebook-clone-c95b3.firebaseapp.com",
  projectId: "facebook-clone-c95b3",
  storageBucket: "facebook-clone-c95b3.appspot.com",
  messagingSenderId: "135095258837",
  appId: "1:135095258837:web:a1e88cb07a7d0d2817dc5c",
};

export const useFirebase = () => useContext(FirebaseContext);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const FirebaseProvider = (props) => {
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  return (
    <FirebaseContext.Provider value={{ createUser, loginUser }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
