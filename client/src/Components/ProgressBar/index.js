import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import Circular from '../CircularProgress';

const ProgressBar = ({ file, setUrl }) => {
  const { url, progress } = useStorage(file); //, error, progress
  useEffect(() => {
    if (url) {
      setUrl(url);
    }
  }, [url, setUrl]);
  return (
    <div>
      {file.name} <Circular pro={progress} />
    </div>
  );
};

export default ProgressBar;
