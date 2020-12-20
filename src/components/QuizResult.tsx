// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// components

import { BtnCta, BtnSide } from './ui/BtnSet';
import { SocialSet } from './ui/SocialSet';

// UI-Material components

import MaterialTable from './material/MaterialTable';

// UI-Terminal components

import TerminalTable from './terminal/TerminalTable';

// code

export const QuizResult = ({
  currentScore,
  totalQuestion,
}: {
  currentScore: any;
  totalQuestion: any;
}) => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);
  return (
    <div className="quiz-result">
      <h2>Game over</h2>
      <h3>
        score: {currentScore} / {totalQuestion}
      </h3>
      <SocialSet />
      <BtnCta />
      <BtnSide />
      {isMaterial && <MaterialTable />}
      {isTerminal && <TerminalTable />}
    </div>
  );
};

export default QuizResult;
