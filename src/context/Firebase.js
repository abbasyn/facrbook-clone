import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAzNKX3g0K8m6m4Wf5viNL7NN8sC5xdtkU",
  authDomain: "facebook-clone-390ca.firebaseapp.com",
  projectId: "facebook-clone-390ca",
  storageBucket: "facebook-clone-390ca.appspot.com",
  messagingSenderId: "843423204456",
  appId: "1:843423204456:web:33dba581b4f3b7e007e7dd",
};

export const useFirebase = () => useContext(FirebaseContext);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const firestore = getFirestore(app);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  let isLoggedIn = user ? true : false;

  useEffect(
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    }),
    []
  );

  console.log({ isLoggedIn });

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // const enterUser = async (
  //   firstName,
  //   surname,
  //   emailOrPhone,
  //   password,
  //   day,
  //   month,
  //   year,
  //   gender
  // ) => {
  //   try {
  //     const docRef = await addDoc(collection(firestore, "users"), {
  //       email,
  //       password,
  //     });

  //     // const docRef = await addDoc(collection(firestore, "users"), {
  //     //   firstName,
  //     //   surname,
  //     //   emailOrPhone,
  //     //   password,
  //     //   day,
  //     //   month,
  //     //   year,
  //     //   gender,
  //     // });
  //     console.log("Document written with ID: ", docRef.id);
  //     return docRef;
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //   }

  //   return;
  // };

  return (
    <FirebaseContext.Provider value={{ createUser, loginUser, isLoggedIn }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
