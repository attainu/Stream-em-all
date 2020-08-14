import { useState } from 'react';

const useToggle = (intial) => {
  const [isToggle, setToggle] = useState(intial);
  const toggle = () => setToggle((prevState) => !prevState);
  return { isToggle, toggle };
};

export default useToggle;
