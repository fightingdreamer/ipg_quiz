// packages

import React from 'react';

// components

import { BtnCta, BtnSide } from './BtnSet';
import { SocialSet } from './SocialSet';

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
      <h2>
        Game over, score: {currentScore} out of {totalQuestion}
      </h2>
      <BtnCta />
      <BtnSide />
      <SocialSet />
    </div>
  );
};

export default QuizResult;
