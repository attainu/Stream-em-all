import React, { useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { auth, signInWithGoogle, signInWithFacebook } from '../../Firebase';
import { connect } from 'react-redux';
import { setUser } from '../../Redux/User/userActionGenerator';
import validator from 'validator';
import Swal from 'sweetalert2';
import logo from '../../Assets/svg/logo.svg';
import styled from 'styled-components';
import './index.css';
import Footer from '../../Components/LPFooter';
import SignInForm from '../../Components/SignInForm';

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
            history.push('/manage');
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
    auth.onAuthStateChanged((userdata) => {
      setUser(userdata);
    });
  }, [setUser]);
  return !!currentUser ? (
    <Redirect to='/manage' />
  ) : (
    <div>
      <div className='main-login-container'>
        <div className='header-top'>
          <Logo src={logo} alt='' className='logo' />
        </div>{' '}
        <SignInForm
          onSubmit={handleSignIn}
          onggClick={() => signInWithGoogle()}
          onfbClick={() => signInWithFacebook()}
        />
        <Footer />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 50%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
