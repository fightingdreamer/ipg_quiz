// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// UI-Material components

import { MaterialBtnCta, MaterialBtnSide } from './btn/MaterialBtn';

// UI-Terminal components

import { TerminalBtnCta, TerminalBtnSide } from './btn/TerminalBtn';

// code

export const BtnCta = () => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);

  return (
    <>
      {isMaterial && <MaterialBtnCta />}
      {isTerminal && <TerminalBtnCta />}
    </>
  );
};

export const BtnSide = () => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);

  return (
    <>
      {isMaterial && <MaterialBtnSide />}
      {isTerminal && <TerminalBtnSide />}
    </>
  );
};
