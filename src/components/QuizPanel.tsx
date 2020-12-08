// packages

import React, { useContext } from 'react';

// React Context API

import UserContext from '../context/UserContext';

// UI-Material components

import TimerTwoToneIcon from '@material-ui/icons/TimerTwoTone';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import FullscreenTwoToneIcon from '@material-ui/icons/FullscreenTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

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
  const { user } = useContext(UserContext); // (setUser tbd) set active user
  return (
    <>
      <div className="quiz-panel desktop-only">
        <div className="quiz-user">
          <AccountCircleTwoToneIcon fontSize="default" className="quiz-avatar" />
          <span className="quiz-player">{user}</span>
        </div>
        <div className="quiz-counter">
          <span>{setCurrentTime}</span>
          <ArrowRightTwoToneIcon fontSize="default" className="quiz-arrow" />
          <TimerTwoToneIcon fontSize="default" className="quiz-timer" />
        </div>
        <div className="quiz-status">
          <FullscreenTwoToneIcon fontSize="default" className="quiz-screen" />
          <HelpTwoToneIcon fontSize="default" className="quiz-help" />
          <span>{currentQuestion + 1}</span>
          <ArrowRightTwoToneIcon fontSize="default" className="quiz-arrow" />
          <span>{totalQuestion}</span>
        </div>
      </div>
      <div className="quiz-panel mobile-only">
        <div className="quiz-user">
          <MenuTwoToneIcon fontSize="default" className="quiz-menu material-icon" />
        </div>
        <div className="quiz-counter">
          <span>{setCurrentTime}</span>
        </div>
        <div className="quiz-status">
          <FullscreenTwoToneIcon fontSize="default" className="quiz-screen" />
        </div>
      </div>
    </>
  );
};

export default QuizPanel;
