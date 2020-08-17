import { firestore, auth } from '../../Firebase';
import profileActionTypes from './profileActionTypes';
const { getProfileActionType } = profileActionTypes;
const getProfileAction = (payload) => ({
  type: getProfileActionType,
  payload,
});

export const getProfiles = () => (dispatch) => {
  firestore
    .collection(auth.currentUser.uid)
    .doc('userprofile')
    .collection('profiles')
    .onSnapshot(
      (snapshot) => {
        dispatch(
          getProfileAction(
            snapshot.docs.map((doc) => ({ docid: doc.id, data: doc.data() }))
          )
        );
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      }
    );
};
