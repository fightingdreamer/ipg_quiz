// packages

import React, { useContext, useEffect } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';
import UserContext from '../context/UserContext';
import RankContext from '../context/RankContext';
import PointsContext from '../context/PointsContext';

// components

import { BtnCta } from './ui/BtnSet';

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
  resetQuiz,
}: {
  currentScore: any;
  totalQuestion: any;
  resetQuiz: () => void;
}) => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);
  const { getRank, addRank } = useContext(RankContext);
  const rank = getRank();
  const { user } = useContext(UserContext);
  const { reset, totalPoints } = useContext(PointsContext);

  useEffect(() => {
    const data = { name: user, points: totalPoints, score: currentScore, questions: totalQuestion };
    localStorage.setItem('rank', JSON.stringify([...rank, data]));
    addRank(data);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="quiz-result">
      <h2>Game over</h2>
      <h3>score: {totalPoints}</h3>
      <div
        className="btn-wrapper"
        onClick={() => {
          reset();
          resetQuiz();
        }}
      >
        <BtnCta />
      </div>
      {isMaterial && <MaterialTable />}
      {isTerminal && <TerminalTable />}
      <p className="quiz-credits">
        Made with{' '}
        {isMaterial && (
          <FavoriteTwoToneIcon fontSize="small" className="quiz-heart material-icon" />
        )}
        {isTerminal && <Icon small icon="heart" className="quiz-heart terminal-icon" />} by{' '}
        <a href="https://ignet.com.pl">Ignet</a>
      </p>
    </div>
  );
};

export default QuizResult;
