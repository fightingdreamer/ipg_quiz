// packages

import React, { createContext, useState } from 'react';

// React Context API

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('material'); // default active theme

  const isTerminal = theme === 'terminal';
  const isMaterial = theme === 'material';
  // UI-Cyberpunk & UI-Isometric placeholders

  return (
    <ThemeContext.Provider
      value={{
        isMaterial,
        isTerminal,
        theme,
        setTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export { ThemeProvider };