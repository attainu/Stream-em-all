import React, { useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { auth } from '../../Firebase';
import { connect } from 'react-redux';
import { setUser } from '../../Redux/User/userActionGenerator';

const SignIn = ({ history, setUser, currentUser }) => {
  console.log(currentUser);
  const handleSignIn = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email);
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
      history.push('/');
    } catch (error) {
      alert(error);
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
