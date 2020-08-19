import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';
import netflix from '../../Assets/netflix.svg';

const Logo = () => {
  const history = useHistory();
  return (
    <div id='logo' className='Logo'>
      <img onClick={() => history.push('/movie')} src={netflix} alt='' />
    </div>
  );
};

export default Logo;
