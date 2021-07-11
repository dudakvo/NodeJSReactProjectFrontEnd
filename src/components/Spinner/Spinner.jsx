import React from 'react';

import SpinnerGif from './spinner.gif';

const Spinner = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={SpinnerGif} alt="loading spinner"></img>
      </div>
    </div>
  );
};

export default Spinner;
