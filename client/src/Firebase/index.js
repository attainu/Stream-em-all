import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const Config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

firebase.initializeApp(Config);
console.log(process.env);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const Ggprovider = new firebase.auth.GoogleAuthProvider();
const FBprovider = new firebase.auth.FacebookAuthProvider();

Ggprovider.setCustomParameters({ prompt: 'select_account' });
FBprovider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(Ggprovider);
export const signInWithFacebook = () => auth.signInWithPopup(FBprovider);

export default firebase;
