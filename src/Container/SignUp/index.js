import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
  firestore,
} from '../../Firebase';
import { connect } from 'react-redux';
import { setUser } from '../../Redux/User/userActionGenerator';
import validator from 'validator';
// import {} from '../../Firebase';

import Swal from 'sweetalert2';

const SignUp = ({ setUser, currentUser }) => {
  const handleSignUp = async (event) => {
    event.preventDefault();
    let { name, email, password, confirm_password } = event.target.elements;
    name = name.value;
    email = email.value;
    password = password.value;
    confirm_password = confirm_password.value;
    if (name.length > 3) {
      if (password.length > 8) {
        if (validator.isEmail(email)) {
          if (validator.isAlphanumeric(password)) {
            if (password === confirm_password) {
              try {
                const data = await auth.createUserWithEmailAndPassword(
                  email,
                  password
                );
                await auth.currentUser.updateProfile({
                  displayName: name,
                });
                firestore
                  .collection(data.user.uid)
                  .doc('Cat')
                  .set({ user: 'amar' });
                firestore
                  .collection(data.user.uid)
                  .doc(data.user.displayName)
                  .set({ user: 'amar' });
                firestore
                  .collection(data.user.uid)
                  .doc('Dog')
                  .set({ user: 'amar' });
                firestore
                  .collection(data.user.uid)
                  .doc('Bird')
                  .set({ user: 'amar' });
                firestore
                  .collection(data.user.uid)
                  .doc('SubscriptionStatus')
                  .set({ status: 'false' });
              } catch (error) {
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: error,
                  showConfirmButton: true,
                  timer: 1500,
                });
              }
            } else {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'password dont match',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          } else {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Password Should be Alphanumeric',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Email Is Invalid',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Password Should be more than 8 characters ',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Name Should be more than 3 characters ',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [setUser]);
  return currentUser ? (
    <Redirect to='/' />
  ) : (
    <div>
      <form onSubmit={handleSignUp}>
        <input name='name' type='text' placeholder='Name' />
        <input name='email' type='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <input
          type='password'
          name='confirm_password'
          placeholder='Confirm Password'
        />
        <button type='submit'>Sign Up</button>
      </form>
      <button onClick={() => signInWithFacebook()}>Facebook</button>
      <button onClick={() => signInWithGoogle()}>Google</button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
