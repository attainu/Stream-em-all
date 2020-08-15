import React from 'react';
import './index.css';
import PrePlancard from '../../Components/PrePlanCard';
import Logo from '../../Components/Logo';
import { auth } from '../../Firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrePlan = ({ currentUser }) => {
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

  if (currentUser.emailVerified) {
    return <Redirect to='/plan' />;
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
});
export default connect(mapStateToProps)(PrePlan);
