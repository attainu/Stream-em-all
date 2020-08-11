import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const Config = {
  apiKey: 'AIzaSyD8BnZ7VrtXKpsBXKis3Gm3Ybwg9bsLRBY',
  authDomain: 'netflix-v2.firebaseapp.com',
  databaseURL: 'https://netflix-v2.firebaseio.com',
  projectId: 'netflix-v2',
  storageBucket: 'netflix-v2.appspot.com',
  messagingSenderId: '760217655938',
  appId: '1:760217655938:web:c42854e6f5a795c0fd329b',
  measurementId: 'G-VDFFEVDSPX',
};

firebase.initializeApp(Config);

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
