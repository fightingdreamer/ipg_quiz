// packages

import React from 'react';

// components

import { BtnCta, BtnSide } from './ui/BtnSet';
import { SocialSet } from './ui/SocialSet';

// UI-Material components

import MaterialTable from './material/MaterialTable';

// code

export const QuizResult = ({
  currentScore,
  totalQuestion,
}: {
  currentScore: any;
  totalQuestion: any;
}) => {
  return (
    <div className="quiz-result">
      <h2>Game over</h2>
      <h3>
        score: {currentScore} / {totalQuestion}
      </h3>
      <SocialSet />
      <BtnCta />
      <BtnSide />
      <MaterialTable />
    </div>
  );
};

export default QuizResult;
