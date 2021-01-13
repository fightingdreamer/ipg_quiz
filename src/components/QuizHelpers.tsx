// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// UI-Material components

import FullscreenTwoToneIcon from '@material-ui/icons/FullscreenTwoTone';

// UI-Terminal components

import { ReactComponent as TerminalSquare } from '../styles/img/terminal-square.svg';

// code

const toggleFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};

export const QuizHelpers = () => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);

  return (
    <div className="quiz-helpers">
      {isMaterial && (
        <FullscreenTwoToneIcon
          onClick={toggleFullscreen}
          fontSize="default"
          className="quiz-screen material-icon"
        />
      )}
      {isTerminal && (
        <TerminalSquare onClick={toggleFullscreen} className="quiz-screen terminal-icon" />
      )}
    </div>
  );
};

export default QuizHelpers;
