import React, { useEffect } from 'react';
import './index.css';
import PrePlancard from '../../Components/PrePlanCard';
import Logo from '../../Components/Logo';
import { auth } from '../../Firebase';
import { connect, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setStatus } from '../../Redux/User/userActionGenerator';
import Swal from 'sweetalert2';

const PrePlan = ({ currentUser, subscriptionStatus }) => {
  const dispatch = useDispatch();
  if (!currentUser.emailVerified) {
    Swal.fire({
      title: 'you need to verify your email',
      text: 'after clicking the ok you can check your mail',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#000',
      confirmButtonText: 'Yes, send it!',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Sent!', 'Your Email verification Sent.', 'success');
        handleVerify();
      } else {
        return <Redirect to='/movie' />;
      }
    });
  }
  const handleVerify = async () => {
    try {
      const user = auth.currentUser;
      await user.sendEmailVerification();
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    dispatch(setStatus());
  }, [dispatch]);

  if (currentUser.emailVerified) {
    return <Redirect to='/plan' />;
  }
  if (subscriptionStatus) {
    return <Redirect to='/video' />;
  }
  return (
    <div className='pre-plan'>
      <Logo />
      <PrePlancard />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  subscriptionStatus: user.subscriptionStatus,
});
export default connect(mapStateToProps)(PrePlan);
