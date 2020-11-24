// packages

import React from 'react';

// components

import { ReactComponent as Logo } from '../styles/img/cube.svg';
import BtnStart from './BtnStart';

// code

export const QuizStart: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="quiz-start">
      <div className="quiz-logo">
        <Logo />
      </div>
      <div className="quiz-btn" onClick={onClick}>
        <BtnStart />
      </div>
    </div>
  );
};
