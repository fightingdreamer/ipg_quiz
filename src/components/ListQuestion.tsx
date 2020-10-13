// packages

import React, { useState } from 'react';

// utils

import { getQuestion } from '../utils/getQuestion';

// code

export const ListQuestion = () => {
  const [currentQuestion, updateQuestion] = useState(0);
  const currentResult = useState(0);
  const objectQuestion = getQuestion[currentQuestion];
  const handleQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < getQuestion.length) {
      updateQuestion(nextQuestion);
    } else {
      console.log('game over');
    }
  };

  return (
    <>
      {currentResult ? (
        <h2>Result placeholder</h2>
      ) : (
        <div>
          <h2>{objectQuestion.definition}</h2>
          <ul>
            {objectQuestion.options.map((question) => (
              <li key={question.id}>{question.answer}</li>
            ))}
          </ul>
          <button onClick={handleQuestion}>Button placeholder</button>
        </div>
      )}
    </>
  );
};
