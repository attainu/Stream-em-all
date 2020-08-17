import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/cross';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';
import { useHistory } from 'react-router-dom';
// media query
import { generateMedia } from 'styled-media-query';

const TabContentPrice = () => {
  const history = useHistory();
  return (
    <TabContainer>
      <div className='tab-content-price'>
        <div className='tab-top-content'>
          <span>Choose one plan and watch everything on Netflix</span>
          <br />
          <button
            className='try-now-btn'
            onClick={() => history.push('/signup')}
          >
            Try it now
          </button>
        </div>
        {/*Table*/}
        <div className='tab-bottom-content'>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Standerd</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Price</td>
                <td>$9.99</td>
                <td>$12.99</td>
                <td>$15.99</td>
              </tr>
              <tr>
                <td>HD Available</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>

              <tr>
                <td>Ultra HD Available</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>

              <tr>
                <td>Screens you can watch on all the same time</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>

              <tr>
                <td>Watch on your TV, laptop and tablet</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>

              <tr>
                <td>Unlimited movies and TV Shows</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>

              <tr>
                <td>Cancel anytime</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TabContainer>
  );
};

export default TabContentPrice;

// styled component
const customMedia = generateMedia({
  lgDesktop: '84rem',
  tablet: '60rem',
  mobile: '46rem',
});

const TabContainer = styled.div`
  background: var(--main-deep-dark);
  .tab-content-price {
    margin: 0 15%;
    padding-bottom: 1rem;
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
    margin-top: 4rem;
    margin-left: -0.01rem;
    grid-column: 10/14;
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
     grid-template-columns: 1fr;
     row-gap: 1.5rem;
     text-align: center;
  `}
  }
  span {
    grid-column: 3/9;
    margin-top: 5rem;
    font-size: 1.3rem;
    line-height: 1.8rem;
    ${customMedia.lessThan('lgDesktop')`
    grid-column: 1/-1;
 `}
  }

  // Tab bottom content(Table)
  .tab-bottom-content {
    margin: 2rem auto;
    ${customMedia.lessThan('lgDesktop')`
    margin-left: -2rem;
`}
  }

  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }

  table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }
  table tbody {
    display: table-row-group;
    verticle-align: middle;
    border-color: inherit;
  }
  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }

  table tbody tr td:first-child {
    text-align: left;
  }

  table tbody tr:nth-child(even) {
    background: #222;
  }
`;
