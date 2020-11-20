// packages

import React from 'react';

// components

import { ListQuestion } from '../components/ListQuestion';

// code

export function PageQuiz() {
  return (
    <>
      <div className="quiz-noise"></div>
      <div className="quiz-overlay"></div>
      <ListQuestion />
    </>
  );
}
