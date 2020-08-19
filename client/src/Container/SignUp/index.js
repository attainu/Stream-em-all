import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { auth, signInWithGoogle, signInWithFacebook } from '../../Firebase';
import { connect } from 'react-redux';
import { setUser } from '../../Redux/User/userActionGenerator';
import validator from 'validator';
import Swal from 'sweetalert2';
import logo from '../../Assets/svg/logo.svg';
import styled from 'styled-components';
import './index.css';
import Footer from '../../Components/LPFooter';
import addProfile from '../../Utils/addProfile';
import SignUpForm from '../../Components/SignUpForm';

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
                await auth.createUserWithEmailAndPassword(email, password);
                await auth.currentUser.updateProfile({
                  displayName: name,
                });
                addProfile();
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
  return !!currentUser ? (
    <Redirect to='/manage' />
  ) : (
    <div>
      <div className='main-login-container'>
        <div className='header-top'>
          <Logo src={logo} alt='' className='logo' />
        </div>{' '}
        <SignUpForm
          onSubmit={handleSignUp}
          onfbClick={() => signInWithFacebook()}
          onggClick={() => signInWithGoogle()}
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 50%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
