import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { earth } from 'react-icons-kit/icomoon/earth';
import { circleDown } from 'react-icons-kit/icomoon/circleDown';
const Footer = () => {
  return (
    <FooterContainer>
      <div className='contact'>
        Question ? <Link>Call +91-9876543210 </Link>
      </div>
      <div className='footer-columns'>
        <ul>
          <li>
            <Link>Gift Card Terms</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Term of Use</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>Privacy Statement</Link>
          </li>
        </ul>
        <ul>
          <li></li>
        </ul>
        {/*button */}
      </div>
      <div className='lang-btn'>
        <Icon classname='Icon' icon={earth} />
        &nbsp;&nbsp;English &nbsp;
        <Icon classname='Icon' icon={circleDown} />
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding-top: 2rem;
  padding-bottom: 3rem;
  color: #fff;

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
  .name {
    color: #fff;
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
