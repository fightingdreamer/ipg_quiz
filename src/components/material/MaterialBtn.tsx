// packages

import React from 'react';

// UI-Material components

import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// code

export const MaterialBtnStart = () => {
  return (
    <Button className="btn-cta" variant="contained">
      Play
      <PlayArrowIcon fontSize="default" className="quiz-play" />
    </Button>
  );
};

export const MaterialBtnCta = () => {
  return (
    <>
      <Button className="btn-cta" variant="contained">
        Replay
        <PlayArrowIcon fontSize="default" className="quiz-play" />
      </Button>
    </>
  );
};

export const MaterialBtnSide = () => {
  return (
    <Button className="btn-side" variant="outlined">
      Side button
    </Button>
  );
};
