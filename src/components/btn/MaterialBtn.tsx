// packages

import React from 'react';
// import React, { useContext } from 'react';

// React Context API

// import ThemeContext from '../../context/ThemeContext';

// UI-Material components

import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// code

export const BtnCta = () => {
  return (
    <Button disableRipple className="btn-cta" variant="contained">
      Play
      <PlayArrowIcon className="quiz-play" />
    </Button>
  );
};

export const BtnSide = () => {
  return (
    <Button className="btn-side" variant="outlined">
      Side button
    </Button>
  );
};
