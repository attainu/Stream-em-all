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

export const setSubStatus = (payload) => ({
  type: status,
  payload,
});

export const setStatus = () => (dispatch) => {
  firestore.collection(auth.currentUser.uid).onSnapshot(
    (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      if (data[0]) {

        dispatch(setSubStatus(data[0].resUrl));
      }
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );
};
