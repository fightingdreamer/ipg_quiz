// packages

import React from 'react';

// UI-Material components

import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import VolumeOffTwoToneIcon from '@material-ui/icons/VolumeOffTwoTone';
import VolumeUpTwoToneIcon from '@material-ui/icons/VolumeUpTwoTone';

// UI-Terminal components

import { Icon } from 'nes-react';

// code

export const IconSet = () => {
  return (
    <>
      <div className="quiz-icons">
        <MenuTwoToneIcon className="quiz-menu material-icon" />
        <VolumeOffTwoToneIcon className="quiz-audio material-icon" />
        <VolumeUpTwoToneIcon className="quiz-audio material-icon" />
        <Icon icon="trophy" small className="quiz-trophy terminal-icon" />
        <Icon icon="star" small className="quiz-star terminal-icon" />
        <Icon icon="star" half small className="quiz-star terminal-icon" />
        <Icon icon="star" empty small className="quiz-star terminal-icon" />
      </div>
    </>
  );
};
