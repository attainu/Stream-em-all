import React from 'react';
import Logo from '../../Components/Logo';
import styled from 'styled-components';
import './index.css';
import { useHistory } from 'react-router-dom';

const ErrorPage404 = () => {
  const history = useHistory();
  return (
    <div className='nt404'>
      <div style={{ zIndex: 1 }}>
        <Logo />
      </div>

      <Body className='body'>
        <h1>Lost your way ?</h1>
        <p>
          Sorry, we can't find that page. You'll find lots to explore <br /> on
          the home page.
        </p>
        <button onClick={() => history.push('/')} className='btn-home'>
          Netflix Home
        </button>
        <p className='error'>
          Error code <span>NSES-404</span>
        </p>
      </Body>
    </div>
  );
};

export default ErrorPage404;

const Body = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  h1 {
    margin-top: 12rem;
    font-size: 5rem;
    z-index: 1;
    color: white;
  }
  p {
    font-size: 2rem;
    margin-top: 2rem;
    z-index: 1;
  }
  .btn-home {
    padding: 0.9rem;
    width: 14rem;
    margin-top: 2rem;
    background: #eaf0f1;
    border-radius: 0.5rem;
    z-index: 1;
    border: none;
    font-size: 1.5rem;
    margin-left: 35%;
    cursor: pointer;
  }

  .error {
    border-left: 2px solid red;
  }
`;
