// packages

import React from 'react';

// UI-Terminal components

import { Icon } from 'nes-react';
import { ReactComponent as TerminalMenu } from '../../styles/img/terminal-menu.svg';
import { ReactComponent as TerminalPlay } from '../../styles/img/terminal-play.svg';
import { ReactComponent as TerminalPause } from '../../styles/img/terminal-pause.svg';

// code

export const TerminalIcons = () => {
  return (
    <>
      <Icon icon="star" small className="quiz-star terminal-icon desktop-only" />
      <Icon icon="star" empty small className="quiz-star terminal-icon desktop-only" />
      <Icon icon="star" half small className="quiz-star terminal-icon desktop-only" />
      <TerminalPause className="quiz-pause terminal-icon desktop-only" />
      <TerminalPlay className="quiz-play terminal-icon desktop-only" />
      <TerminalMenu className="quiz-menu terminal-icon" />
      {/* <Icon icon="trophy" small className="quiz-trophy terminal-icon" /> */}
    </>
  );
};
