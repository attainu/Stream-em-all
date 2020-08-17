import { firestore, auth } from '../Firebase';
export default () => {
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
