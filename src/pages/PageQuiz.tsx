// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// components

import ThemeRadio from '../components/ThemeRadio';
import { PageQuestion } from './PageQuestion';

// UI-Material components

import { MaterialCursor } from '../components/material/MaterialCursor';

// code

export function PageQuiz() {
  const { isMaterial } = useContext(ThemeContext);
  return (
    <>
      <div className="quiz-noise"></div>
      <div className="quiz-overlay"></div>
      <PageQuestion />
      <div className="quiz-theme">
        <ThemeRadio />
      </div>
      {isMaterial && <MaterialCursor />}
    </>
  );
}
