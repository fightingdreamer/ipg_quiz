// packages

import React, { useState } from 'react';

// utils

import { getQuestion } from '../utils/getQuestion';

// code

export const ListQuestion = () => {
  // questions, result & score initial states
  const [currentQuestion, updateQuestion] = useState(0);
  const [currentResult, updateResult] = useState(0);
  const [currentScore, updateScore] = useState(0);
  const objectQuestion = getQuestion[currentQuestion];

  // questions, result & score handler
  const handleQuestion = (arg) => {
    if (arg) {
      updateScore(currentScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < getQuestion.length) {
      updateQuestion(nextQuestion);
    } else {
      updateResult(1);
      console.log('game over');
    }
  };

  return (
    <>
      {currentResult ? (
        <h2>Game over, score: {currentScore}</h2>
      ) : (
        <div>
          <h2>
            # {currentQuestion + 1} {objectQuestion.definition}
          </h2>
          <ul>
            {objectQuestion.options.map((question) => (
              <li key={question.id}>
                {' # id:'} {question.id} {question.answer}
              </li>
            ))}
          </ul>
          <button onClick={handleQuestion}>Button placeholder</button>
        </div>
      )}
    </>
  );
};
