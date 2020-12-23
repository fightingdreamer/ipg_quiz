// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// components

import { BtnCta, BtnSide } from './ui/BtnSet';
import { SocialSet } from './ui/SocialSet';

// UI-Material components

import MaterialTable from './material/MaterialTable';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

// UI-Terminal components

import TerminalTable from './terminal/TerminalTable';
import { Icon } from 'nes-react';

// code

export const QuizResult = ({
  currentScore,
  totalQuestion,
}: {
  currentScore: any;
  totalQuestion: any;
}) => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);
  return (
    <div className="quiz-result">
      <h2>Game over</h2>
      <h3>
        score: {currentScore} / {totalQuestion}
      </h3>
      <SocialSet />
      <BtnCta />
      <BtnSide />
      {isMaterial && <MaterialTable />}
      {isTerminal && <TerminalTable />}
      <p className="quiz-credits">
        Made with{' '}
        {isMaterial && (
          <FavoriteTwoToneIcon fontSize="small" className="quiz-heart material-icon" />
        )}
        {isTerminal && <Icon small icon="heart" className="quiz-heart terminal-icon" />} by{' '}
        <a href="http://ignet.com.pl">Ignet</a>
      </p>
    </div>
  );
};

export default QuizResult;
