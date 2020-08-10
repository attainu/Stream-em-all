import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/icomoon/facebook';
import { googlePlus } from 'react-icons-kit/icomoon/googlePlus';
const LogInForm = () => {
  return (
    <FormContainer>
      <div className='form-container'>
        <form>
          <h1>Sign In</h1>
          <div className='input-container'>
            <input className='input-empty' type='email' required />
            <label>Email or Phone Number</label>
          </div>

          <div className='input-container'>
            <input className='input-empty' type='password' required />
            <label>Password</label>
          </div>
          <Button type='submit'>Sign In</Button>
          <Link className='forgot-password'>Forgot password ?</Link>
          <label className='checkbox-container'>
            Remember me
            <input type='checkbox' />
            <span className='checkmark'></span>
          </label>
          <Link className='need-help' to='/home'>
            Need help ?
          </Link>

          <div className='social-login'>
            <Link className='facebook'>
              <Icon size={20} icon={facebook} />
              <span className='facebook-span'>Login with Facebook ?</span>
            </Link>
            <Link className='google'>
              <Icon size={25} icon={googlePlus} />
              <span className='google-span'>Login with Google+ ?</span>
            </Link>
          </div>
        </form>
      </div>
    </FormContainer>
  );
};

export default LogInForm;

// Form container

const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 5;

  .form-container {
    background: rgba(0, 0, 0.6);
    position: relative;
    width: 25rem;
    height: 35rem;
    padding: 4rem;
    margin-bottom: 3rem;
    border-radius: 1rem;
  }

  .input-container {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1.2rem;
  }

  .input-empty {
    color: #fff;
    background: var(--main-grey);
    border: 0;
    height: 2.7rem;
    padding: 0.9rem 1.25rem 0;
    text-align: left;
  }

  form div label {
    position: absolute;
    top: 0.62rem;
    left: 1.25rem;
    pointer-events: none;
    color: black;
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
  input:focus {
    outline: none;
  }
  .need-help,
  .forgot-password {
    color: var(--main-grey);
  }
  .need-help {
    margin-left: 4.3rem;
  }
  .forgot-password {
    margin-left: 1.6rem;
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

  .checkbox-container .checkmark {
    margi-top: 0.5rem;
  }

  .social-login {
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    color: #fff;
  }
  .facebook {
    margin-top: -1.2rem;
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
    margin-top: 1rem;
  }
  .google-span {
    color: var(--main-grey);
    margin-left: 0.5rem;
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
