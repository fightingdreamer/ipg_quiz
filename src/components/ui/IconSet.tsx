// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../../context/ThemeContext';

// UI-Material components

import { MaterialIcons } from '../material/MaterialIcons';

// UI-Terminal components

import { TerminalIcons } from '../terminal/TerminalIcons';

// code

export const IconSet = () => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);

  return (
    <div className="quiz-icons">
      {isMaterial && <MaterialIcons />}
      {isTerminal && <TerminalIcons />}
    </div>
  );
};
