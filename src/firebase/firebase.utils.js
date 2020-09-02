import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAjMzx4xj_nvkSwyNbNo11HveOWgUUMpJM",
  authDomain: "crwn-clothing-2336b.firebaseapp.com",
  databaseURL: "https://crwn-clothing-2336b.firebaseio.com",
  projectId: "crwn-clothing-2336b",
  storageBucket: "crwn-clothing-2336b.appspot.com",
  messagingSenderId: "83475259126",
  appId: "1:83475259126:web:e95c87aa8d26e83358d6d7",
  measurementId: "G-4XCFWCKJS7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
