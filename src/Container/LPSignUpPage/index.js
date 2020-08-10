import React from 'react';
import logo from '../../Assets/svg/logo.svg';
import styled from 'styled-components';
import './index.css';
import Footer from '../../Components/LPFooter';
import SignUpForm from '../../Components/SignUpForm';

const LPSignUpPage = () => {
  return (
    <div>
      <div className='main-login-container'>
        <div className='header-top'>
          <Logo src={logo} alt='' className='logo' />
        </div>{' '}
        <SignUpForm />
      </div>

      <Footer />
    </div>
  );
};

export default LPSignUpPage;

// Logo

const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
