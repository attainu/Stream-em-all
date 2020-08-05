import firebase from 'firebase/app';
import 'firebase/firestore';
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

// export const CreateUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log(`${error} User Can't be registered`);
//     }
//   }
//   return userRef;
// };

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const FBprovider = new firebase.auth.FacebookAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
FBprovider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFacebook = () => auth.signInWithPopup(provider);

export default firebase;
