// packages

import React, { useContext } from 'react';

// React Context API

import UserContext from '../context/UserContext';
import PointsContext from '../context/PointsContext';

// components

import QuizProgress from './QuizProgress';

// UI-Material components

import MaterialToast from './MaterialToast';
import TimerTwoToneIcon from '@material-ui/icons/TimerTwoTone';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import FullscreenTwoToneIcon from '@material-ui/icons/FullscreenTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

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
  const { user } = useContext(UserContext);
  const { totalPoints } = useContext(PointsContext);
  return (
    <>
      <div className="quiz-panel desktop-only">
        <div className="quiz-details">
          <AccountCircleTwoToneIcon fontSize="default" className="quiz-avatar material-icon" />
          <span className="quiz-player">{user}</span>
          <StarTwoToneIcon fontSize="default" className="quiz-star material-icon" />
          <span className="quiz-points">{totalPoints}</span>
          {/* <span className="quiz-status">{currentQuestion + 1}/{totalQuestion}</span> */}
        </div>
        <div className="quiz-counter">
          <span>{setCurrentTime}</span>
          <ArrowRightTwoToneIcon fontSize="default" className="quiz-arrow material-icon" />
          <TimerTwoToneIcon fontSize="default" className="quiz-timer material-icon" />
        </div>
        <div className="quiz-helpers">
          <MaterialToast />
          <HelpTwoToneIcon fontSize="default" className="quiz-help material-icon" />
          <FullscreenTwoToneIcon fontSize="default" className="quiz-screen material-icon" />
        </div>
      </div>
      <div className="quiz-panel mobile-only">
        <div className="quiz-details">
          <MenuTwoToneIcon fontSize="default" className="quiz-menu material-icon" />
        </div>
        <div className="quiz-counter">
          <span>{setCurrentTime}</span>
        </div>
        <div className="quiz-helpers">
          <FullscreenTwoToneIcon fontSize="default" className="quiz-screen material-icon" />
        </div>
      </div>
      <QuizProgress />
    </>
  );
};

export default QuizPanel;
