// packages

import React from 'react';

// utils

import { getQuestion } from '../utils/getQuestion';

// code

export function PageQuiz() {
  const objectQuestion = getQuestion[0];
  return (
    <>
      <h2>{objectQuestion.definitionQuestion}</h2>
      <ul>
        {objectQuestion.optionQuestion.map((question) => (
          <li key={question.id}>{question.answer}</li>
        ))}
      </ul>
    </>
  );
}
