// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// UI-Material components

import MaterialToast from './material/MaterialToast';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import FullscreenTwoToneIcon from '@material-ui/icons/FullscreenTwoTone';

// UI-Terminal components

import { ReactComponent as TerminalError } from '../styles/img/terminal-error.svg';

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
        <>
          <MaterialToast />
          <HelpTwoToneIcon fontSize="default" className="quiz-help material-icon mobile-off" />
          <FullscreenTwoToneIcon
            onClick={toggleFullscreen}
            fontSize="default"
            className="quiz-screen material-icon"
          />
        </>
      )}
      {isTerminal && <TerminalError className="quiz-error terminal-icon" />}
    </div>
  );
};

export default QuizHelpers;
