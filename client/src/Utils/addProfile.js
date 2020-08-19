import { firestore, auth } from '../Firebase';
const addProfile = () => {
  return (
    firestore
      .collection(auth.currentUser.uid)
      .doc('userprofile')
      .collection('profiles')
      .add({
        img: auth.currentUser.photoURL || 'https://i.ibb.co/vvK8FX6/iu-3.jpg',
        profile: auth.currentUser.displayName,
      }),
    firestore
      .collection(auth.currentUser.uid)
      .doc('userprofile')
      .collection('profiles')
      .add({
        img: 'https://i.ibb.co/WKrPzZd/iu.jpg',
        profile: 'Mommy',
      }),
    firestore
      .collection(auth.currentUser.uid)
      .doc('userprofile')
      .collection('profiles')
      .add({
        img: 'https://i.ibb.co/JpdSW1q/iu-4.jpg',
        profile: 'Jack',
      }),
    firestore
      .collection(auth.currentUser.uid)
      .doc('userprofile')
      .collection('profiles')
      .add({
        img: 'https://i.ibb.co/ZGwhrNH/iu-2.jpg',
        profile: 'Dad',
      })
  );
};
export const addoneProfiles = (Image, title) =>
  firestore
    .collection(auth.currentUser.uid)
    .doc('userprofile')
    .collection('profiles')
    .add({
      img: Image,
      profile: title,
    });
export const deleteoneProfile = (docid) =>
  firestore
    .collection(auth.currentUser.uid)
    .doc('userprofile')
    .collection('profiles')
    .doc(docid)
    .delete();
export const updateoneProfile = (docid, Image, title) =>
  firestore
    .collection(auth.currentUser.uid)
    .doc('userprofile')
    .collection('profiles')
    .doc(docid)
    .update({
      profile: title,
      img: Image,
    });
export const ManageggProfile = () =>
  firestore
    .collection(auth.currentUser.uid)
    .doc('userprofile')
    .collection('profiles')
    .onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      if (data.length === 0) {
        if (
          auth.currentUser.providerData[0].providerId === 'facebook.com' ||
          auth.currentUser.providerData[0].providerId === 'google.com'
        ) {
          addProfile();
        }
      }
    });
export const deleteRestData = (profile) =>
  firestore.collection(auth.currentUser.uid).doc(profile).delete();
export default addProfile;
