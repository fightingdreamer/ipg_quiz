import React from 'react';
import { ReactComponent as Logo } from '../img/cube.svg';

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
