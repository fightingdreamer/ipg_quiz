// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../../context/ThemeContext';

// UI-Material components

import { MaterialSelect } from '../material/MaterialSelect';

// UI-Terminal components

import { TerminalSelect } from '../terminal/TerminalSelect';

// code

export const SelectSet = () => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);

  return (
    <>
      {isMaterial && <MaterialSelect />}
      {isTerminal && <TerminalSelect />}
    </>
  );
};
