import { firestore, auth } from '../../Firebase';
import userActions from './userActionTypes';
const { logIn, userProfile, status, getList } = userActions;

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
export const Payment = async (body) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetch('http://localhost:5001/paymemt', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    const data = response.json();
    const response_2 = await data;
    window.open(`${response_2.result.receipt_url}`, '_blank');
    if (response_2) {
      return firestore.collection(auth.currentUser.uid).add({
        subscriptionStatus: true,
        resUrl: response_2.result.receipt_url,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getMyListonly = (payload) => ({
  type: getList,
  payload,
});
export const getMyList = (person) => (dispatch) => {
  firestore
    .collection(auth.currentUser.uid)
    .doc(person)
    .collection('list')
    .onSnapshot((snapshot) => {
      dispatch(getMyListonly(snapshot.docs.map((doc) => doc.data())));
    });
};
