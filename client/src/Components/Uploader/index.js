import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];
  const handleChange = (e) => {
    const selected = e.target.files[0];
    return selected && types.includes(selected.type)
      ? (setFile(selected), setError(''))
      : (setFile(null), setError('please select an image file (png/jpeg)'));
  };
  return (
    <form>
      <input type='file' onChange={handleChange} name='' id='' />
      {error && <h2>{error}</h2>}
      {file && <h2>{file.name}</h2>}
    </form>
  );
};

export default UploadForm;
