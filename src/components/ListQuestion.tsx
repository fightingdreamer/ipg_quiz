// packages

import React, { useState } from 'react';

// utils

import { getQuestion } from '../utils/getQuestion';

// code

export const ListQuestion = () => {
  const [currentQuestion, updateQuestion] = useState(0);
  const objectQuestion = getQuestion[currentQuestion];
  const handleQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    updateQuestion(nextQuestion);
  };

  return (
    <>
      <h2>{objectQuestion.definition}</h2>
      <ul>
        {objectQuestion.options.map((question) => (
          <li key={question.id}>{question.answer}</li>
        ))}
      </ul>
      <button onClick={handleQuestion}>Button placeholder</button>
    </>
  );
};
