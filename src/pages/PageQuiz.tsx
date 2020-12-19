// packages

import React from 'react';

// components

import ThemeRadio from '../components/ThemeRadio';
import { PageQuestion } from './PageQuestion';

// code

export function PageQuiz() {
  return (
    <>
      <div className="quiz-noise"></div>
      <div className="quiz-overlay"></div>
      <PageQuestion />
      <div className="quiz-theme">
        <ThemeRadio />
      </div>
    </>
  );
}
