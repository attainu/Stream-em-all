import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';

const ProgressBar = ({ file, setUrl }) => {
  const { url, error, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setUrl(url);
    }
  }, [url]);
  return <div>{file.name}</div>;
};

export default ProgressBar;
