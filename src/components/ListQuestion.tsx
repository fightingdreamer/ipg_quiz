// packages

import React from 'react';

// utils

import { getQuestion } from '../utils/getQuestion';

// code

export function ListQuestion() {
  const objectQuestion = getQuestion[0];
  return (
    <>
      <h2>{objectQuestion.definition}</h2>
      <ul>
        {objectQuestion.options.map((question) => (
          <li key={question.id}>{question.answer}</li>
        ))}
      </ul>
    </>
  );
}
