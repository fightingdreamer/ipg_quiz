// packages

import React from 'react';

// components

import { ReactComponent as Logo } from '../styles/img/cube.svg';
import { BtnCta } from './BtnSet';

// code

export const QuizStart: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="quiz-start">
      <div className="quiz-logo">
        <Logo />
      </div>
      <div className="quiz-btn" onClick={onClick}>
        <BtnCta />
      </div>
    </div>
  );
};
