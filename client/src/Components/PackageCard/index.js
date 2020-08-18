import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
// import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import './index.css';

const PackageCard = ({
  seletedPlan,
  setSeletedPlan,
  token,
  stripeKey,
  name,
  amount,
  data,
  email,
}) => {
  // const history = useHistory();
  const [checkRadio, setCheckedRadio] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(seletedPlan);
  };
  return (
    <Fragment>
      <div className='package-card'>
        <Logo />
        <MainContainer>
          <div className='top-details'>
            <p>STEP 1 OF 1</p>
            <h2> Choose the plan that is right for you</h2>
            <p>Downgrade or upgrade at any time.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div
              className='premium'
              onClick={() => {
                return (
                  setCheckedRadio(1),
                  setSeletedPlan({ planName: 'Netflix Premium', amount: 12500 })
                );
              }}
            >
              <input
                type='radio'
                id='premium'
                className='radio'
                name='gender'
                checked={checkRadio === 1 ? true : false}
                onChange={(e) => setSeletedPlan(e.target.value)}
                value={{ planName: 'Netflix Premium', amount: 12500 }}
              />
              <span></span>
              <div className='label'>
                <label className='title' htmlFor='premium'>
                  Premium
                </label>
                <br />
                <label htmlFor='premium'>INR 12500 /Lifetime (4 Display)</label>
              </div>
              <hr />
              <div className='details'>
                <h1 className='first'>4K</h1>
                <p>Stream in Ultra HD. Watch on 4 devices at a time.</p>
              </div>
            </div>

            <div
              className='Standard'
              onClick={() =>
                setCheckedRadio(2) &
                setSeletedPlan({ planName: 'Netflix Standard', amount: 8500 })
              }
            >
              <input
                type='radio'
                id='Standard'
                className='radio'
                checked={checkRadio === 2 ? true : false}
                name='gender'
                value={{ planName: 'Netflix Standard', amount: 8500 }}
                onChange={(e) => setSeletedPlan(e.target.value)}
              />
              <span></span>
              <div className='label'>
                <label className='title' htmlFor='Standard'>
                  Standard
                </label>
                <br />
                <label htmlFor='Standard'>INR 8500 /Lifetime (2 Display)</label>
              </div>
              <div className='details'>
                <hr />
                <h1 className='second'>HD</h1>
                <p>Stream in High Definition. Watch on 2 devices at a time.</p>
              </div>
            </div>

            <div
              className='basic'
              onClick={() =>
                setCheckedRadio(3) &
                setSeletedPlan({ planName: 'Netflix Basic', amount: 4500 })
              }
            >
              <input
                type='radio'
                id='basic'
                className='radio'
                name='gender'
                checked={checkRadio === 3 ? true : false}
                value={{ planName: 'Netflix Basic', amount: 4500 }}
                onChange={(e) => setSeletedPlan(e.target.value)}
              />
              <span></span>
              <div className='label'>
                <label className='title' htmlFor='basic'>
                  Basic
                </label>
                <br />
                <label htmlFor='basic'>INR 4500 /Lifetime (1 Display)</label>
              </div>
              <hr />
              <div className='details'>
                <h1 className='third'>SD</h1>
                <p>
                  Stream in Standard Definition. Watch on 1 device at a time.
                </p>
              </div>
            </div>
            <StripeCheckout
              image='https://dwglogo.com/wp-content/uploads/2019/02/Netflix_N_logo.png'
              token={token}
              stripeKey={stripeKey}
              name={name}
              currency='INR'
              amount={amount}
              key={data}
              email={email}
              allowRememberMe={false}
            >
              <button type='submit' className='btn'>
                Continue
              </button>
            </StripeCheckout>
          </form>
          <p className='terms'>
            HD and Ultra HD availability subject to your internet service and
            device
            <br />
            capabilities. Not all content available in HD or Ultra HD.
            <span>
              <br />
              <span>See Terms of Use for more details.</span>
            </span>
          </p>
        </MainContainer>
      </div>
      {/*<Footer />*/}
    </Fragment>
  );
};

export default PackageCard;

const MainContainer = styled.div`
  margin-bottom: 5rem;
  .premium,
  .Standard,
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
