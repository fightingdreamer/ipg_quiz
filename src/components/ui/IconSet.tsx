// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../../context/ThemeContext';

// UI-Material components

import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import VolumeOffTwoToneIcon from '@material-ui/icons/VolumeOffTwoTone';
import VolumeUpTwoToneIcon from '@material-ui/icons/VolumeUpTwoTone';
import StarBorderTwoToneIcon from '@material-ui/icons/StarBorderTwoTone';
import StarHalfTwoToneIcon from '@material-ui/icons/StarHalfTwoTone';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

// UI-Terminal components

import { Icon } from 'nes-react';

// code

export const IconSet = () => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);

  return (
    <div className="quiz-icons">
      {isMaterial && (
        <>
          <StarTwoToneIcon fontSize="default" className="quiz-star material-icon desktop-only" />
          <StarBorderTwoToneIcon
            fontSize="default"
            className="quiz-star material-icon desktop-only"
          />
          <StarHalfTwoToneIcon
            fontSize="default"
            className="quiz-star material-icon desktop-only"
          />
          <VolumeOffTwoToneIcon
            fontSize="default"
            className="quiz-audio material-icon desktop-only"
          />
          <VolumeUpTwoToneIcon
            fontSize="default"
            className="quiz-audio material-icon desktop-only"
          />
          <MenuTwoToneIcon fontSize="default" className="quiz-menu material-icon" />
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
