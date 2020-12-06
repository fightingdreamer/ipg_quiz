// packages

import React from 'react';

// components

import { ReactComponent as Logo } from '../styles/img/cube.svg';
import { SelectSet } from './SelectSet';
import { IconSet } from './IconSet';
import QuizInput from './QuizInput';
import { BtnCta } from './BtnSet';

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
        <form className="quiz-form" noValidate autoComplete="off">
          <div className="quiz-input">
            <QuizInput />
          </div>
          <div className="quiz-btn" onClick={onClick}>
            <BtnCta />
          </div>
        </form>
      </div>
    </>
  );
};
