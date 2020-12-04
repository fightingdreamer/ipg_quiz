// packages

import React from 'react';

// components

import { ReactComponent as Logo } from '../styles/img/cube.svg';
import { BtnCta } from './BtnSet';
import { IconSet } from './IconSet';
import { SelectSet } from './SelectSet';

// code

export const QuizStart: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <div className="quiz-panel">
        <SelectSet />
        <IconSet />
      </div>
      <div className="quiz-start">
        <div className="quiz-logo">
          <Logo />
        </div>
        <div className="quiz-btn" onClick={onClick}>
          <BtnCta />
        </div>
        {/* enter your name input placeholder */}
      </div>
    </>
  );
};
