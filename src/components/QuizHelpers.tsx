// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// components

import { FullScreen, useFullScreenHandle } from 'react-full-screen';

// UI-Material components

import MaterialToast from './material/MaterialToast';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import FullscreenTwoToneIcon from '@material-ui/icons/FullscreenTwoTone';

// UI-Terminal components

import { ReactComponent as TerminalError } from '../styles/img/terminal-error.svg';

// code

export const QuizHelpers = () => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);
  const FullScreenHandler = useFullScreenHandle();
  let placeholder: string = 'placeholder';
  if (FullScreenHandler.active === false) {
    placeholder = '';
  }

  return (
    <div className="quiz-helpers">
      {isMaterial && (
        <>
          <FullScreen handle={FullScreenHandler}>{placeholder}</FullScreen>
          <MaterialToast />
          <HelpTwoToneIcon fontSize="default" className="quiz-help material-icon mobile-off" />
          <FullscreenTwoToneIcon
            onClick={FullScreenHandler.enter}
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
