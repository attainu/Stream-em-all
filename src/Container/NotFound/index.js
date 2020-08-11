import React from 'react';
import logo from '../../Assets/svg/logo.svg';
import styled from 'styled-components';
import './index.css';
import Footer from '../../Components/LPFooter';

const ErrorPage404 = () => {
  return (
    <div>
      <div className='header-container'>
        <div className='header-top'>
          <Logo src={logo} alt='' className='logo' />
        </div>
        <Body className='body'>
          <h1>404</h1>
        </Body>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage404;

// Logo

const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 7%;
  left: 7%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  z-index: 1;
`;

const Body = styled.div`
  display: grid;
  justify-content: center;

  & h1 {
    margin-top: 12rem;
    font-size: 20rem;
    z-index: 1;
    color: var(--main-grey);
  }
`;
