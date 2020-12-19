// packages

import React from 'react';

// UI-Terminal components

import { Button } from 'nes-react';
import { ReactComponent as TerminalPlay } from '../../styles/img/terminal-play.svg';

// code

export const TerminalBtnCta = () => {
  return (
    <>
      <Button primary>
        Play
        <TerminalPlay className="quiz-play terminal-icon" />
      </Button>
    </>
  );
};

export const TerminalBtnSide = () => {
  return (
    <>
      <Button error>Side Button</Button>
    </>
  );
};
