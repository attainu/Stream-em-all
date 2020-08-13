import React, { Fragment } from 'react';
import './index.css';
// import Footer from '../../Components/LPFooter';
import styled from 'styled-components';
import logo from '../../Assets/svg/logo.svg';
import { Link } from 'react-router-dom';
const PackageCard = () => {
  return (
    <Fragment>
      <div className='package-card'>
        <HeaderComponent className='header-container'>
          <div className='header-top-package'>
            <Logo src={logo} />
            <Link to='signin' className='signIn-btn'>
              Sign Out
            </Link>
          </div>
        </HeaderComponent>

        <MainContainer>
          <div className='top-details'>
            <p>STEP 2 OF 3</p>
            <h2> Choose the plan that is right for you</h2>
            <p>Downgrade or upgrade at any time.</p>
          </div>
          <div className='premium'>
            <input type='radio' id='premium' name='gender' value='premium' />
            <div className='label'>
              <label className='title' for='premium'>
                Premium
              </label>
              <br />
              <label for='premium'>INR 1250 /month</label>
            </div>
            <hr />
            <div className='details'>
              <h1 className='first'>4K</h1>
              <p>Stream in Ultra HD. Watch on 4 devices at a time.</p>
            </div>
          </div>

          <div className='standerd'>
            <input type='radio' id='standerd' name='gender' value='standerd' />
            <div className='label'>
              <label className='title' for='standerd'>
                Standerd
              </label>
              <br />
              <label for='standerd'>INR 850 /month</label>
            </div>
            <div className='details'>
              <hr />
              <h1 className='second'>HD</h1>
              <p>Stream in High Definition. Watch on 2 devices at a time.</p>
            </div>
          </div>

          <div className='basic'>
            <input type='radio' id='basic' name='gender' value='basic' />
            <div className='label'>
              <label className='title' for='basic'>
                Basic
              </label>
              <br />
              <label for='basic'>INR 450 /month</label>
            </div>
            <hr />
            <div className='details'>
              <h1 className='third'>SD</h1>
              <p>Stream in Standard Definition. Watch on 1 device at a time.</p>
            </div>
          </div>
          <button className='btn'>Continue</button>
          <p className='terms'>
            HD and Ultra HD availability subject to your internet service and
            device
            <br />
            capabilities. Not all content available in HD or Ultra HD. See{' '}
            <span>
              <a href='/'>
                Terms of <br /> Use{' '}
              </a>
            </span>
            for more details.
          </p>
        </MainContainer>
      </div>
      {/*<Footer />*/}
    </Fragment>
  );
};

export default PackageCard;

const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 7%;
  left: 7%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const MainContainer = styled.div`
  margin-bottom: 5rem;
  .premium,
  .standerd,
  .basic {
    width: 23rem;
    border-radius: 0.5rem;
    height: 10.5rem;
    margin-top: 2rem;
    border: 1px solid #eee;
    box-shadow: 0 3px 3px 1px #ccc;
    padding: 16px;
    text-align: left;
    cursor: pointer;
  }
  .premium {
    margin-top: 15rem;
  }
  input {
    cursor: pointer;
  }
  hr {
    margin-top: 1rem;
    color: #fff;
  }
  // label
  label {
    margin-left: 1.5rem;
  }
  .title {
    font-size: 1.5rem;
    margin-top: -5rem;
    font-weight: bold;
  }

  h1 {
    margin-top: 1rem;
    margin-left: 2rem;
  }
  .first {
    color: red;
  }
  .second {
    color: #b83227;
  }
  .third {
    color: #3498db;
  }
  p {
    margin-left: 2rem;
  }

  .btn {
    margin-top: 1.5rem;
    padding: 1rem 11rem;
    color: white;
    background: var(--main-red);
    border: none;
  }

  .terms {
    margin-top: 1rem;
    margin-left: -0.01rem;
    font-size: 0.8rem;
  }
  a {
    color: #0a79df;
  }

  .top-details {
    margin-top: 10rem;
    margin-bottom: -12rem;
    & p {
      margin-left: -0.01rem;
    }
    & h2 {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 2rem 3% 0;
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
