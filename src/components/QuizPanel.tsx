// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';
import UserContext from '../context/UserContext';
import PointsContext from '../context/PointsContext';

// components

import QuizHelpers from './QuizHelpers';
import QuizProgress from './QuizProgress';
import QuizTimer from './QuizTimer';

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
  currentQuestion,
  totalQuestion,
  quizStatus,
}: {
  currentQuestion: any;
  totalQuestion: any;
  quizStatus: boolean;
}) => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { totalPoints } = useContext(PointsContext);
  const progressValue: number = ((currentQuestion + 1) / totalQuestion) * 100;

  return (
    <>
      <div className="quiz-panel">
        <div className="quiz-details">
          {isMaterial && <MenuTwoToneIcon fontSize="default" className="quiz-menu material-icon" />}
          {isTerminal && <TerminalMenu className="quiz-menu terminal-icon" />}
          {isMaterial && (
            <AccountCircleTwoToneIcon
              fontSize="default"
              className="quiz-avatar material-icon mobile-off"
            />
          )}
          {isTerminal && <TerminalUser className="quiz-avatar terminal-icon mobile-off" />}
          <span className="quiz-player mobile-off">{user}</span>
          {isMaterial && (
            <StarTwoToneIcon fontSize="default" className="quiz-star material-icon mobile-off" />
          )}
          {isTerminal && <Icon icon="star" small className="quiz-star terminal-icon mobile-off" />}
          <span className="quiz-points mobile-off">{totalPoints}</span>
          {isMaterial && (
            <CheckCircleTwoToneIcon className="quiz-check material-icon mobile-off"></CheckCircleTwoToneIcon>
          )}
          {isTerminal && <TerminalCheck className="quiz-check terminal-icon mobile-off" />}
          <span className="quiz-status mobile-off">
            {currentQuestion + 1}/{totalQuestion}
          </span>
        </div>
        {!quizStatus && (
          <div className="quiz-counter">
            {isMaterial && (
              <>
                <QuizTimer />
                <ArrowRightTwoToneIcon fontSize="default" className="quiz-arrow material-icon" />
                <TimerTwoToneIcon fontSize="default" className="quiz-timer material-icon" />
              </>
            )}
            {isTerminal && (
              <>
                <TerminalBomb className="quiz-timer terminal-icon" />
                <QuizTimer />
              </>
            )}
          </div>
        )}
        <QuizHelpers />
      </div>
      {isMaterial && <QuizProgress value={progressValue} />}
    </>
  );
};

export default QuizPanel;
