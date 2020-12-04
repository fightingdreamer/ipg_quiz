// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// UI-Material components

import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import VolumeOffTwoToneIcon from '@material-ui/icons/VolumeOffTwoTone';
import VolumeUpTwoToneIcon from '@material-ui/icons/VolumeUpTwoTone';

// UI-Terminal components

import { Icon } from 'nes-react';

// code

export const IconSet = () => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);

  return (
    <div className="quiz-icons">
      {isMaterial && (
        <>
          <MenuTwoToneIcon fontSize="default" className="quiz-menu material-icon" />
          <VolumeOffTwoToneIcon fontSize="default" className="quiz-audio material-icon" />
          <VolumeUpTwoToneIcon fontSize="default" className="quiz-audio material-icon" />
        </>
      )}
      {isTerminal && (
        <>
          <Icon icon="trophy" small className="quiz-trophy terminal-icon" />
          <Icon icon="star" small className="quiz-star terminal-icon" />
          <Icon icon="star" half small className="quiz-star terminal-icon" />
          <Icon icon="star" empty small className="quiz-star terminal-icon" />
        </>
      )}
    </div>
  );
};