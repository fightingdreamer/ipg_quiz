// packages

import React from 'react';

// components

import { ReactComponent as Logo } from '../styles/img/cube.svg';

// code

export const QuizStart: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="quiz-start">
      <div className="quiz-logo">
        <Logo />
      </div>
      <button className="btn-action" onClick={onClick}>
        <span>Start</span>
      </button>
    </div>
  );
};
