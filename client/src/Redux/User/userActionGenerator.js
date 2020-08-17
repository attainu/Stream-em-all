import { firestore, auth } from '../../Firebase';
import userActions from './userActionTypes';
const { logIn, userProfile, status } = userActions;

export const setUser = (user) => ({
  type: logIn,
  payload: user,
});
export const setUserProfile = (Profile) => ({
  type: userProfile,
  payload: Profile,
});

export const setSubStatus = () => ({
  type: status,
});

export const setStatus = () => (dispatch) => {
  firestore.collection(auth.currentUser.uid).onSnapshot(
    (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      if (data[0]) {
        console.log(data);
        console.log(data[0]);
        console.log(data[0].resUrl);
        console.log(data.resUrl);
        dispatch(setSubStatus());
      }
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );
};
