// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../../context/ThemeContext';

// UI-Material components

import { MaterialBtnCta, MaterialBtnSide, MaterialBtnStart } from '../material/MaterialBtn';

// UI-Terminal components

import { TerminalBtnCta, TerminalBtnSide, TerminalBtnStart } from '../terminal/TerminalBtn';

// code

export const BtnStart = () => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);
  return (
    <>
      {isMaterial && <MaterialBtnStart />}
      {isTerminal && <TerminalBtnStart />}
    </>
  );
};

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
