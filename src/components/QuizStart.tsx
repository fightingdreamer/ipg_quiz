// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// components

import { SelectSet } from './SelectSet';
import { IconSet } from './IconSet';
import { ReactComponent as Logo } from '../styles/img/cube-lines.svg';
import { LogoCube } from './LogoCube';
import QuizInput from './QuizInput';
import { BtnCta } from './BtnSet';

// code

export const QuizStart: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);

  return (
    <>
      <div className="quiz-panel">
        <SelectSet />
        <IconSet />
      </div>
      <div className="quiz-start">
        <div className="quiz-logo">
          {isMaterial && <LogoCube value="any" index="any" />}
          {isTerminal && <Logo />}
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
