import React from 'react';
import './index.css';
import PrePlancard from '../../Components/PrePlanCard';
import styled from 'styled-components';
import logo from '../../Assets/svg/logo.svg';
import { Link } from 'react-router-dom';
const PrePlan = () => {
  return (
    <div>
      <HeaderComponent>
        <div className='header-container'>
          <div className='header-top'>
            <Logo src={logo} />
            <Link to='signin' className='signIn-btn'>
              Sign Out
            </Link>
          </div>
        </div>
      </HeaderComponent>
      <PrePlancard />
    </div>
  );
};

export default PrePlan;

const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 7%;
  left: 7%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: -13rem 3% 0;
    padding: 0.4374rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    color: #fff;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    z-index: 1;
    &:hover {
      background: var(--main-red-hover);
    }
  }
`;
