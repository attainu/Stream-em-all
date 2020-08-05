import React, { useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { auth, signInWithGoogle, signInWithFacebook } from '../../Firebase';
import { connect } from 'react-redux';
import { setUser } from '../../Redux/User/userActionGenerator';
import validator from 'validator';
import Swal from 'sweetalert2';

const SignIn = ({ history, setUser, currentUser }) => {
  const handleSignIn = async (event) => {
    event.preventDefault();
    let { email, password } = event.target.elements;
    email = email.value;
    password = password.value;
    if (password.length > 8) {
      if (validator.isEmail(email)) {
        if (validator.isAlphanumeric(password)) {
          try {
            await auth.signInWithEmailAndPassword(email, password);
            history.push('/');
          } catch (error) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: error,
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
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [history, setUser]);
  return currentUser ? (
    <Redirect to='/' />
  ) : (
    <div>
      <form onSubmit={handleSignIn}>
        <input name='email' type='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Sign In</button>
      </form>
      <button onClick={() => signInWithFacebook()}>Facebook</button>
      <button onClick={() => signInWithGoogle()}>Google</button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});
const mapStateToProps = ({ currentUser }) => ({
  currentUser: currentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
