// packages

import React, { createContext, useState } from 'react';

// types

export interface IThemeContext {
  isMaterial: boolean;
  isTerminal: boolean;
  theme: string;
  setTheme: (name: string) => void;
}

// React Context API

const ThemeContext = createContext({} as IThemeContext);

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('terminal'); // default active theme
  const isTerminal = theme === 'terminal';
  const isMaterial = theme === 'material';

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
