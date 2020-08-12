import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import facebook from '../../Assets/images/fb.svg';
import google from '../../Assets/images/google.svg';
const SignUpForm = ({ onSubmit, onfbClick, onggClick }) => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [conpassword, setConpassword] = useState([]);
  return (
    <FormContainer>
      <div className='form-container'>
        <form onSubmit={onSubmit}>
          <h1>Sign Up</h1>
          <div className='input-container'>
            <input
              className='input-empty'
              type='text'
              name='name'
              required
              id={name === '' ? 'btm_border' : undefined}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onClick={(e) => setName(e.target.value)}
            />
            <label>Name</label>
          </div>
          {name === '' && (
            <span
              className='ifemailempty'
              style={{
                color: '#E87D38',
                fontSize: '0.8rem',
                marginTop: '5px',
              }}
            >
              Please enter your name.
            </span>
          )}
          <div className='input-container'>
            <input
              className='input-empty'
              id={email === '' ? 'btm_border' : undefined}
              name='email'
              type='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              onClick={(e) => setEmail(e.target.value)}
            />
            <label>Email </label>
          </div>
          {email === '' && (
            <span
              className='ifemailempty'
              style={{
                color: '#E87D38',
                fontSize: '0.8rem',
                marginTop: '5px',
              }}
            >
              Please enter a valid email address.
            </span>
          )}
          <div className='input-container'>
            <input
              className='input-empty'
              type='password'
              name='password'
              id={password === '' ? 'btm_border' : undefined}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onClick={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          {password === '' && (
            <span
              className='ifemailempty'
              style={{
                color: '#E87D38',
                fontSize: '0.8rem',
                marginTop: '5px',
              }}
            >
              Your password must contain between 4 and 60 characters.
            </span>
          )}
          <div className='input-container'>
            <input
              className='input-empty'
              name='confirm_password'
              type='password'
              required
              id={conpassword === '' ? 'btm_border' : undefined}
              value={conpassword}
              onChange={(e) => setConpassword(e.target.value)}
              onClick={(e) => setConpassword(e.target.value)}
            />
            <label>Confirm Password</label>
          </div>
          {conpassword === '' && (
            <span
              className='ifemailempty'
              style={{
                color: '#E87D38',
                fontSize: '0.8rem',
                marginTop: '5px',
              }}
            >
              Your password must contain between 4 and 60 characters.
            </span>
          )}
          <div className='input-container'>
            <Button type='submit'>Sign Up</Button>
          </div>
          <label className='checkbox-container'>
            <input type='checkbox' />
            Remember me
            <span className='checkmark'></span>
          </label>
          <Link className='need-help' to='/'>
            Need help ?
          </Link>

          <div className='fb-container' onClick={onfbClick}>
            <img src={facebook} style={{ width: '4vh' }} alt='' />
            <span className='facebook-span'>Login with Facebook</span>
          </div>
          <div className='fb-container' onClick={onggClick}>
            <img src={google} style={{ width: '4vh' }} alt='' />
            <span className='facebook-span'>Login with Google</span>
          </div>

          <div>
            <span className='textmute'>
              Already Signed Up?
              <Link to='/signin' className='texton'>
                {' '}
                Sign In.{' '}
              </Link>
              <br />
              <br />
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className='textblue'>Learn more.</span>
            </span>
          </div>
        </form>
      </div>
    </FormContainer>
  );
};

export default SignUpForm;

// Form container

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;

  .form-container {
    background: rgba(0, 0, 0, 0.7);
    position: relative;
    width: 20rem;
    min-height: 80vh;
    max-height: 90vh;
    padding: 4rem;
    margin-bottom: 3rem;
    border-radius: 0.6rem;
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1.2rem;
  }

  .input-empty {
    color: #fff;
    background: #444;
    border: 0;
    height: 2.7rem;
    padding: 0.9rem 1.25rem 0;
    text-align: left;
    border-radius: 5px;
  }

  form div label {
    position: absolute;
    top: 40%;
    left: 1.25rem;
    pointer-events: none;
    color: #999;
    font-size: 1rem;
    transition: transform 150ms ease-out, font-size 150ms ease-out;
  }

  form div {
    position: relative;
  }
  input:focus ~ label {
    top: 0.45rem;
    font-size: 0.7rem;
  }
  input:valid ~ label {
    top: 0.45rem;
    font-size: 1rem;
  }

  input:focus {
    outline: none;
    font-size: 1.2rem;
  }
  #btm_border {
    border-bottom: 3px solid #e87d38;
  }
  .need-help {
    color: var(--main-grey);
  }
  // checkbox
  .checkbox-container {
    margin-left: 0.1rem;
    padding-left: 1.875;
    position: relative;
    font-size: 0.9rem;
    cursor: pointer;
    color: var(--main-grey);
  }
  .need-help {
    margin-left: 8rem;
    padding-left: 1.875;
    margin-bottom: 1rem;
    position: relative;
    font-size: 0.9rem;
    cursor: pointer;
    color: var(--main-grey);
  }
  .fb-container {
    margin-left: 0.1rem;
    margin-top: 0.7rem !important;
    margin-bottom: 0.7rem;
    padding-left: 1.875;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    color: var(--main-grey);
  }
  .checkbox-container .checkmark {
    margin-top: 0.5rem;
  }
  .social-login {
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    color: #fff;
  }
  .facebook {
    margin-top: -11rem;
    color: var(--main-grey);
    margin-left: 1rem;
  }
  .facebook-span {
    color: var(--main-grey);
    margin-left: 1rem;
  }

  .google {
    color: var(--main-grey);
    margin-left: 1.2rem;
    margin-top: -7rem;
  }
  .google-span {
    color: var(--main-grey);
    margin-left: 0.5rem;
  }
  .textmute {
    color: var(--main-grey);
    font-size: 0.9rem;
    font-weight: 500;
  }
  .texton {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: #fff;
    cursor: pointer;
  }
  .textblue {
    color: rgb(0, 132, 255);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// button

const Button = styled.button`
  color: #fff;
  background: rgba(229, 9, 20);
  border: none;
  outline: none;
  padding: 0.8rem 2rem;
  border-radius: 0.125rem;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: opacity 0.2s ease-in;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem 0;
`;
