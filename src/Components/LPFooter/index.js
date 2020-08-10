import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { earth } from 'react-icons-kit/icomoon/earth';
import { circleDown } from 'react-icons-kit/icomoon/circleDown';
const Footer = () => {
  return (
    <FooterContainer>
      <span className='contact'>
        Question ? <Link>Call +91-9876543210 </Link>
      </span>
      <div className='footer-columns'>
        <ul>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Investor relations</Link>
          </li>
          <li>
            <Link>Ways To Watch</Link>
          </li>
          <li>
            <Link>Corporate Information</Link>
          </li>
          <li>
            <Link>Netflix Originals</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link>Help Center</Link>
          </li>
          <li>
            <Link>Jobs</Link>
          </li>
          <li>
            <Link>Terms to Use</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link>Account</Link>
          </li>
          <li>
            <Link>Redeem Gift Cards</Link>
          </li>
          <li>
            <Link>Privacy</Link>
          </li>
          <li>
            <Link>Speed Test</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link>Media Center</Link>
          </li>
          <li>
            <Link>Buy Gift Cards</Link>
          </li>
          <li>
            <Link>Cookie Preference</Link>
          </li>
          <li>
            <Link>Legal Notices</Link>
          </li>
        </ul>
        {/*button */}
        <div className='lang-btn'>
          <Icon classname='Icon' icon={earth} />
          &nbsp;&nbsp;English &nbsp;
          <Icon classname='Icon' icon={circleDown} />
        </div>
      </div>
      {/*Toogle Language */}
      {/*<div className='toggle-lang'>
        <ul>
          <li>English</li>
        </ul>
        <ul>
          <li>French</li>
        </ul>
        <ul>
          <li>German</li>
        </ul>
        <ul>
          <li>Bengali</li>
        </ul>
        <ul>
          <li>Hindi</li>
        </ul>
  </div>*/}
      <span className='developers'>
        Developed by <Link className='name'>Akash Dutta</Link> &{' '}
        <Link className='name'>Amar Gupta</Link>
      </span>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  ul li {
    list-style: none;
    line-height: 2.5rem;
  }
  a {
    color: #999;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .contact {
    margin-left: 17.5%;
    font-size: 1rem;
  }

  .developers {
    margin-left: 40%;
    font-size: 1.3rem;
  }
  .name {
    color: #fff;
  }

  //Language button
  .lang-btn {
    margin-left: 15%;
    margin-right: 1rem;
    background: transparent;
    border: 0.9px solid #333;
    padding: 0.8rem;
    width: 8rem;
    cursor: pointer;
  }

  .toggle-lang {
    margin-left: 17.5%;
    position: absolute;
  }

  .toggle-lang ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    &:hover {
      background: #fff;
      color: black;
    }
  }
`;
