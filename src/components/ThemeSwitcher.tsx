// packages

import React from 'react';

// components

import { useThemeSwitcher } from 'react-css-theme-switcher';
import ThemeRadio from '../components/ThemeRadio';

// code

export const ThemeSwitcher = () => {
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  if (status === 'loading') {
    return <div>Loading styles...</div>;
  }

  if (isDarkMode) {
    console.log(`Dark mode status: ${isDarkMode}`);
  }

  const toggleDarkMode = () => {
    setIsDarkMode((previous) => {
      switcher({ theme: previous ? themes.light : themes.dark });
      return !previous;
    });
  };

  return (
    <>
      <div className="quiz-theme">
        <h2>{currentTheme} theme</h2>
        <button onClick={toggleDarkMode}>
          <span>Switch to...</span>
        </button>
        <ThemeRadio />
      </div>
    </>
  );
};
