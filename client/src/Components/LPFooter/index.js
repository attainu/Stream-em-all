import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { earth } from 'react-icons-kit/icomoon/earth';
import { circleDown } from 'react-icons-kit/icomoon/circleDown';
// media query
import { generateMedia } from 'styled-media-query';

const Footer = ({ props }) => {
  return (
    <FooterContainer
      style={{
        background: props ? '#EAF0F1' : 'rgba(0, 0, 0, 0.7)',
        color: props ? 'rgb(0,0,0)' : 'rgba(255, 255, 255)',
      }}
    >
      <div className='contact'>
        Question ?{' '}
        <Link
          style={{
            color: props ? 'rgb(0,0,0)' : 'rgba(255, 255, 255)',
          }}
          to='/'
        >
          Call +91-9876543210{' '}
        </Link>
      </div>
      <div className='footer-columns'>
        <ul>
          <li>
            <Link
              style={{
                color: props ? 'rgb(0,0,0)' : 'rgba(255, 255, 255)',
              }}
              to='/'
            >
              Gift Card Terms
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              style={{
                color: props ? 'rgb(0,0,0)' : 'rgba(255, 255, 255)',
              }}
              to='/'
            >
              Term of Use
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              style={{
                color: props ? 'rgb(0,0,0)' : 'rgba(255, 255, 255)',
              }}
              to='/'
            >
              Privacy Statement
            </Link>
          </li>
        </ul>
        <ul>
          <li></li>
        </ul>
        {/*button */}
      </div>
      <div className='lang-btn'>
        <Icon className='Icon' icon={earth} />
        &nbsp;&nbsp;English &nbsp;
        <Icon className='Icon' icon={circleDown} />
      </div>
    </FooterContainer>
  );
};

export default Footer;

//media query
const customMedia = generateMedia({
  lgDesktop: '84em',
  mdDesktop: '71rem',
  tablet: '60em',
  mobile: '46',
});
const FooterContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan('tablet')`
     grid-template-columns: repeat(2, 1fr);
`}
  }
  ul li {
    list-style: none;
    line-height: 2.5rem;
  }
  a {
    color: #fff;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .contact {
    margin-left: 15%;
    font-size: 1rem;
  }

  .developers {
    margin-left: 40%;
    font-size: 1.3rem;
  }

  //Language button
  .lang-btn {
    margin-top: 1%;
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
