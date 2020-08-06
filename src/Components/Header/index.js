import React from 'react';
import './index.css';
import logo from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
const Header = () => {
  return (
    <HeaderComponent className='header-container'>
      <div className='header-top'>
        <Logo src={logo} />
        <Link className='signIn-btn'>Sign In</Link>
      </div>
      {/*Header content*/}

      <div className='header-content'>
        <Tittle>See what's next</Tittle>
        <SubTittle>WATCH ANYWHERE. CANCEL ANYWHERE</SubTittle>
        <Link className='try-now-btn'>
          Try it now
          <Icon className='Icon' icon={ic_keyboard_arrow_right} size={38} />
        </Link>
      </div>
    </HeaderComponent>
  );
};

export default Header;

// ########### STYLED COMPONENT ##########

//Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
// Header-Container
const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
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
  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
  }
  // Header Content
  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;
  }
  // try now btn
  .try-now-btn {
    background: var(--main-red);
    display: inline-block;
    text-transform: uppercase;
    border: none;
    outline: none;
    margin: 0 33%;
    padding: 1.4rem;
    border-radius: 0.18rem;
    font-size: 2rem;
    text-align: center;
    color: #fff;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: background 0.2s ease-in;
    cursor: pointer;
    &:hover {
      background: var(--main-red-hover);
    }
  }

  .Icon {
    vertical-align: bottom;
    margin-left: 1.5rem;
  }
`;

// Main tittle

const Tittle = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
`;

// Sub tittle
const SubTittle = styled.h2`
  margin: 0 0 1.8rem;
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.1em;
  text-transform: uppercase;
`;
