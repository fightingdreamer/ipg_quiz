// packages

import React, { useContext, useState } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// components

import { BtnCta, BtnSide } from './BtnSet';
import { QuizStart } from '../components/QuizStart';

// utils

import { getQuestion } from '../utils/getQuestion';

// UI-Material components

import TimerTwoToneIcon from '@material-ui/icons/TimerTwoTone';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';

// UI-Terminal components

import { SocialSet } from './SocialSet';

// Custom components

import ItemQuestion from './ItemQuestion';

// code

export const ListQuestion = () => {
  // hooks default
  const [currentScore, setScore] = useState(0);
  const [currentQuestion, setQuestion] = useState(0);
  const [currentStatus, setStatus] = useState(false);
  const objectQuestion = getQuestion[currentQuestion];

  // use React Context API

  const { isTerminal } = useContext(ThemeContext);

  // time & question settings

  const [setCurrentTime, setTime] = useState(20);
  const [currentData, setData] = useState({
    setCurrentTime: 20,
    statusTime: 'stop',
    setQuestion: null,
    activeQuestion: '',
  });

  const timer = () => {
    let count = currentData.setCurrentTime;
    const int = setInterval(() => {
      setTime(count - 1);
      count = count - 1;
      if (count < 1) clearInterval(int);
    }, 1000);
  };

  // hooks update
  const handleQuestion = (correctAnswer: boolean) => {
    if (correctAnswer) {
      setScore(currentScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < getQuestion.length) {
      setQuestion(nextQuestion);
    } else {
      setStatus(true);
    }
  };

  return (
    <>
      {currentStatus ? (
        <>
          <div className="quiz-panel">
            <div className="quiz-user">
              <AccountCircleTwoToneIcon fontSize="default" className="quiz-user" />
            </div>
          </div>
          <div className="quiz-result">
            <h2>
              Game over, score: {currentScore} out of {getQuestion.length}
            </h2>
            <BtnCta />
            <BtnSide />
            <SocialSet />
          </div>
        </>
      ) : (
        <>
          {currentData && currentData.activeQuestion !== '' ? (
            <div className="quiz-wrapper">
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
                  <span>{getQuestion.length}</span>
                </div>
              </div>
              <div className="quiz-definition">
                <h2>{objectQuestion.definition}</h2>
              </div>
              <ItemQuestion
                options={objectQuestion.options}
                handleValue={handleQuestion}
                isTerminal={isTerminal}
              />
            </div>
          ) : (
            <QuizStart
              onClick={() => {
                setData({ ...currentData, activeQuestion: 'q1' });
                timer();
              }}
            />
          )}
        </>
      )}
    </>
  );
};
