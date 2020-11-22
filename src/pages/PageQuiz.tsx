// packages

import React from 'react';

// components

import { ListQuestion } from '../components/ListQuestion';

// theme switcher

import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
const themes = {
  Terminal: 'path/placeholder.css',
};

// code

export function PageQuiz() {
  return (
    <>
      <ThemeSwitcherProvider defaultTheme="Terminal" themeMap={themes}>
        <ThemeSwitcher />
      </ThemeSwitcherProvider>
      <div className="quiz-noise"></div>
      <div className="quiz-overlay"></div>
      <ListQuestion />
    </>
  );
}
