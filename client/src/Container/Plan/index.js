import React from 'react';
import PackageCard from '../../Components/PackageCard';
import Footer from '../../Components/LPFooter';
import { auth } from '../../Firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';

const Plan = ({ currentUser }) => {
  if (!currentUser.emailVerified) {
    // inputValue: inputValue,
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
      const res = await user.sendEmailVerification();
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (currentUser.emailVerified) {
    return <Redirect to='/movie' />;
  }
  return (
    <div>
      <PackageCard />
      <Footer props={'#fff'} />
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(Plan);
