import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import { CartItemType } from "../types/models";

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

export const addCollectionAndDocument = async (
  collectionKey: string,
  objectToAdd: { title: string; items: CartItemType[] }[]
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batchObject = firestore.batch();
  objectToAdd.forEach((obj) => {
    const docRef = collectionRef.doc();
    batchObject.set(docRef, obj);
  });
  return await batchObject.commit();
};

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  ...additionalData: any[]
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    let createdAt = firebase.firestore.FieldValue.serverTimestamp();
    try {
      userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error("error occured during creating user", error);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = async () => {
  try {
    await auth.signInWithPopup(provider);
  } catch (error) {
      console.error(error)
  }
};

export default firebase;
