import React from 'react';
import styled from 'styled-components';
import ImgTv from '../../../Assets/images/tab-tv.png';
import ImgMacBook from '../../../Assets/images/tab-macbook.png';
import ImgTab from '../../../Assets/images/tab-tablet.png';
import { useHistory } from 'react-router-dom';
// media query
import { generateMedia } from 'styled-media-query';

const TabContentDoor = () => {
  const history = useHistory();
  return (
    <TabContainer>
      <div className='tab-content-door'>
        <div className='tab-top-content'>
          <span>
            {' '}
            Watch TV shows and movies anytime, anywhere - <br />
            personalized for you
          </span>
          <button
            className='try-now-btn'
            onClick={() => history.push('/signup')}
          >
            Try it now
          </button>
        </div>
        {/*tab bottom content*/}
        <div className='tab-bottom-content'>
          {/*TV*/}
          <div>
            <img src={ImgTv} alt='' />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more
            </p>
          </div>
          {/*Tablet*/}
          <div className='tab'>
            <img src={ImgTab} alt='' />
            <h3>Watch instantly or download for later</h3>
            <p>Available on phone and tablet, wherever you are</p>
          </div>
          {/*Macbook*/}
          <div className='mac-book'>
            <img src={ImgMacBook} alt='' />
            <h3>Use any computer</h3>
            <p>Watch right on Netflix.com</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
};

export default TabContentDoor;

// Styled Component
const customMedia = generateMedia({
  lgDesktop: '84rem',
  mdDesktop: '70rem',
  tablet: '60rem',
  mobile: '46rem',
});
const TabContainer = styled.div`
  background: var(--main-deep-dark);
  .tab-content-door {
    margin: 0 15%;
  }
  // Button
  .try-now-btn {
    background: var(--main-red);
    display: inline-block;
    text-transform: uppercase;
    border: none;
    outline: none;
    margin: 0 30%;
    padding: 1rem;
    border-radius: 0.18rem;
    font-size: 1.2rem;
    text-align: center;
    color: #fff;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    transition: background 0.2s ease-in;
    cursor: pointer;
    margin-top: 5rem;
    margin-left: -0.01rem;
    grid-column: 10/16;
    &:hover {
      background: var(--main-red-hover);
    }
    ${customMedia.lessThan('lgDesktop')`
    grid-column: 1/-1;
    font-size: .9rem;
    margin: 0 10%;
 `}
  }

  // tab top content
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 2.5rem 9;
    ${customMedia.lessThan('lgDesktop')`
      grid-template-columns: repeat(2, 1fr)
    `}

    ${customMedia.lessThan('tablet')`
      grid-template-columns:  1fr;
      text-align: center;
       row-gap: 1.5rem;
    `}
  }
  span {
    grid-column: 1/8;
    margin-top: 5rem;
    font-size: 1.3rem;
    line-height: 1.8rem;
    ${customMedia.lessThan('tablet')`
    grid-column: 1/-1;
    font-size: 1.2rem;
  `}
  }
  img {
    width: 18rem;
  }

  // tab top content
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 4rem;
    ${customMedia.lessThan('tablet')`
     grid-template-columns: 100%;
     align-items: center;
     padding-left: 0;
     padding-right: 0;
  `}
  }
  p {
    color: var(--main-grey);
  }
  h3 {
    margin: 0.5rem 0;
  }
  .tab,
  .mac-book {
    margin-top: 1rem;
  }
`;
