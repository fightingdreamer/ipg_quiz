// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';
import UserContext from '../context/UserContext';
import PointsContext from '../context/PointsContext';

// components

import QuizHelpers from './QuizHelpers';
import QuizProgress from './QuizProgress';

// UI-Material components

import TimerTwoToneIcon from '@material-ui/icons/TimerTwoTone';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';

// UI-Terminal components

import { Icon } from 'nes-react';
import { ReactComponent as TerminalBomb } from '../styles/img/terminal-bomb.svg';
import { ReactComponent as TerminalCheck } from '../styles/img/terminal-check.svg';
import { ReactComponent as TerminalMenu } from '../styles/img/terminal-menu.svg';
import { ReactComponent as TerminalUser } from '../styles/img/terminal-user.svg';

// code

export const QuizPanel = ({
  setCurrentTime,
  currentQuestion,
  totalQuestion,
}: {
  setCurrentTime: any;
  currentQuestion: any;
  totalQuestion: any;
}) => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { totalPoints } = useContext(PointsContext);
  return (
    <>
      <div className="quiz-panel desktop-only">
        <div className="quiz-details">
          {isMaterial && (
            <AccountCircleTwoToneIcon fontSize="default" className="quiz-avatar material-icon" />
          )}
          {isTerminal && <TerminalUser className="quiz-avatar terminal-icon" />}
          <span className="quiz-player">{user}</span>
          {isMaterial && <StarTwoToneIcon fontSize="default" className="quiz-star material-icon" />}
          {isTerminal && <Icon icon="star" small className="quiz-star terminal-icon" />}
          <span className="quiz-points">{totalPoints}</span>
          {isMaterial && (
            <CheckCircleTwoToneIcon className="quiz-check material-icon"></CheckCircleTwoToneIcon>
          )}
          {isTerminal && <TerminalCheck className="quiz-check terminal-icon" />}
          <span className="quiz-status">
            {currentQuestion + 1}/{totalQuestion}
          </span>
        </div>
        <div className="quiz-counter">
          {isMaterial && (
            <>
              <span>{setCurrentTime}</span>
              <ArrowRightTwoToneIcon fontSize="default" className="quiz-arrow material-icon" />
              <TimerTwoToneIcon fontSize="default" className="quiz-timer material-icon" />
            </>
          )}
          {isTerminal && (
            <>
              <TerminalBomb className="quiz-timer terminal-icon" />
              <span>{setCurrentTime}</span>
            </>
          )}
        </div>
        <QuizHelpers />
      </div>
      <div className="quiz-panel mobile-only">
        <div className="quiz-details">
          {isMaterial && <MenuTwoToneIcon fontSize="default" className="quiz-menu material-icon" />}
          {isTerminal && <TerminalMenu className="quiz-menu terminal-icon" />}
        </div>
        <div className="quiz-counter">
          <span>{setCurrentTime}</span>
        </div>
        <QuizHelpers />
      </div>
      {isMaterial && <QuizProgress />}
    </>
  );
};

export default QuizPanel;
