import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';

const ProgressBar = ({ file, setUrl }) => {
  const { url } = useStorage(file); //, error, progress
  useEffect(() => {
    if (url) {
      setUrl(url);
    }
  }, [url, setUrl]);
  return <div>{file.name}</div>;
};

export default ProgressBar;
