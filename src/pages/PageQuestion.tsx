// packages

import React, { useContext, useState } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';
import PointsContext from '../context/PointsContext';
import TimeContext from '../context/TimeContext';

// custom components

import { QuizStart } from '../components/QuizStart';
import QuizPanel from '../components/QuizPanel';
import QuizDefinition from '../components/QuizDefinition';
import ItemQuestion from '../components/ItemQuestion';
import QuizResult from '../components/QuizResult';

// utils

import { getQuestion } from '../utils/getQuestion';

// code

export const PageQuestion = () => {
  // hooks default
  const [currentScore, setScore] = useState(0);
  const [currentQuestion, setQuestion] = useState(0);
  const [currentStatus, setStatus] = useState(false);
  const objectQuestion = getQuestion[currentQuestion];

  // use React Context API
  const { isTerminal } = useContext(ThemeContext);
  const { setPoints } = useContext(PointsContext);
  const { time } = useContext(TimeContext);

  // time & question settings
  const [setCurrentTime, setTime] = useState(20);
  const [currentData, setData] = useState({
    setCurrentTime: time,
    statusTime: 'stop',
    setQuestion: null,
    activeQuestion: '',
  });
  let int;
  const timer = () => {
    let count = currentData.setCurrentTime;
    int = setInterval(() => {
      setTime(count - 1);
      count = count - 1;
      if (count < 1) clearInterval(int);
    }, 1000);
  };

  // hooks update
  const questionHandler = (correctAnswer: boolean) => {
    setTime(20);
    clearInterval(int);
    if (correctAnswer) {
      setScore(currentScore + 1);
      setPoints(setCurrentTime * 5);
    } else {
      setPoints(-1);
    }

    const nextQuestion: number = currentQuestion + 1;
    if (nextQuestion < getQuestion.length) {
      setQuestion(nextQuestion);
    } else {
      setStatus(true);
    }
    setTime(20);
  };

  const submitHandler = () => {
    setData({ ...currentData, activeQuestion: 'q1' });
    timer();
  };

  return (
    <>
      {currentStatus ? (
        <>
          <QuizPanel
            setCurrentTime={setCurrentTime}
            currentQuestion={currentQuestion}
            totalQuestion={getQuestion.length}
          />
          <QuizResult currentScore={currentScore} totalQuestion={getQuestion.length} />
        </>
      ) : (
        <>
          {currentData && currentData.activeQuestion !== '' ? (
            <div className="quiz-wrapper">
              <QuizPanel
                setCurrentTime={setCurrentTime}
                currentQuestion={currentQuestion}
                totalQuestion={getQuestion.length}
              />
              <QuizDefinition definitionQuestion={objectQuestion.definition} />
              <ItemQuestion
                options={objectQuestion.options}
                valueHandler={questionHandler}
                isTerminal={isTerminal}
              />
            </div>
          ) : (
            <QuizStart onFormSubmit={submitHandler} />
          )}
        </>
      )}
    </>
  );
};
