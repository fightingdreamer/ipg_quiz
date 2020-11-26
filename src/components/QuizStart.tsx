// packages

import React from 'react';

// components

import { ReactComponent as Logo } from '../styles/img/cube.svg';
import { BtnCta } from './BtnSet';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import VolumeOffTwoToneIcon from '@material-ui/icons/VolumeOffTwoTone';
import VolumeUpTwoToneIcon from '@material-ui/icons/VolumeUpTwoTone';

// code

export const QuizStart: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <div className="quiz-panel">
        <MenuTwoToneIcon className="quiz-menu" />
        <VolumeOffTwoToneIcon className="quiz-audio" />
        <VolumeUpTwoToneIcon className="quiz-audio" />
      </div>
      <div className="quiz-start">
        <div className="quiz-logo">
          <Logo />
        </div>
        <div className="quiz-btn" onClick={onClick}>
          <BtnCta />
        </div>
      </div>
    </>
  );
};
