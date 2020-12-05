// packages

import React from 'react';

// UI-Material components

import TimerTwoToneIcon from '@material-ui/icons/TimerTwoTone';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';

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
  return (
    <div className="quiz-panel">
      <div className="quiz-user">
        <AccountCircleTwoToneIcon fontSize="default" className="quiz-user" />
      </div>
      <div className="quiz-counter">
        <span>{setCurrentTime}</span>
        <ArrowRightTwoToneIcon fontSize="default" className="quiz-arrow" />
        <TimerTwoToneIcon fontSize="default" className="quiz-timer" />
      </div>
      <div className="quiz-status">
        <HelpTwoToneIcon fontSize="default" className="quiz-help" />
        <span>{currentQuestion + 1}</span>
        <ArrowRightTwoToneIcon fontSize="default" className="quiz-arrow" />
        <span>{totalQuestion}</span>
      </div>
    </div>
  );
};

export default QuizPanel;
