// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// UI-Material components

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

// UI-Terminal components

import { Icon } from 'nes-react';

// code

export const SocialSet = () => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);

  return (
    <div className="quiz-social">
      {isMaterial && (
        <>
          <FacebookIcon fontSize="large" className="quiz-facebook material-icon" />
          <TwitterIcon fontSize="large" className="quiz-twitter material-icon" />
        </>
      )}
      {isTerminal && (
        <>
          <Icon icon="facebook" className="quiz-facebook terminal-icon" />
          <Icon icon="twitter" className="quiz-twitter terminal-icon" />
        </>
      )}
    </div>
  );
};
