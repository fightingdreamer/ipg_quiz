// packages

import React from 'react';

// components

import ThemeRadio from '../components/ThemeRadio';
import { ListQuestion } from '../components/ListQuestion';

// code

export function PageQuiz() {
  return (
    <>
      <div className="quiz-noise"></div>
      <div className="quiz-overlay"></div>
      <ListQuestion />
      <div className="quiz-theme">
        <ThemeRadio />
      </div>
    </>
  );
}
