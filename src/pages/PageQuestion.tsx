// packages

import React, { useContext, useState } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';
import PointsContext from '../context/PointsContext';

// custom components

import { QuizStart } from '../components/QuizStart';
import QuizPanel from '../components/QuizPanel';
import QuizDefinition from '../components/QuizDefinition';
import ItemQuestion from '../components/ItemQuestion';
import QuizResult from '../components/QuizResult';

// utils

import { getQuestion, trackQuestion } from '../utils/getQuestion';

// code

export const PageQuestion = () => {
  // hooks default
  const [currentScore, setScore] = useState(0);
  const [currentQuestion, setQuestion] = useState(0);
  const [currentStatus, setStatus] = useState(false);
  const objectQuestion = trackQuestion(currentQuestion + 1);

  // use React Context API
  const { isTerminal } = useContext(ThemeContext);
  const { setPoints } = useContext(PointsContext);

  // time & question settings
  const [currentData, setData] = useState({
    setQuestion: null,
    activeQuestion: '',
  });

  // hooks update
  const questionHandler = (correctAnswer: boolean) => {
    if (correctAnswer) {
      setScore(currentScore + 1);
      setPoints(+1);
    } else {
      // setPoints(-1);
    }

    const nextQuestion: number = currentQuestion + 1;
    if (nextQuestion < getQuestion.length) {
      setQuestion(nextQuestion);
    } else {
      setStatus(true);
    }
    // timer placeholder
  };

  const submitHandler = () => {
    setData({ ...currentData, activeQuestion: 'q1' });
    // timer placeholder
  };

  const resetQuiz = () => {
    setQuestion(0);
    setData({ setQuestion: null, activeQuestion: '' });
    setStatus(false);
  };

  return (
    <>
      {currentStatus ? (
        <>
          <QuizPanel
            quizStatus={currentStatus}
            currentQuestion={currentQuestion}
            totalQuestion={getQuestion.length}
          />
          <QuizResult
            resetQuiz={resetQuiz}
            currentScore={currentScore}
            totalQuestion={getQuestion.length}
          />
        </>
      ) : (
        <>
          {currentData && currentData.activeQuestion !== '' ? (
            <div className="quiz-wrapper">
              <QuizPanel
                quizStatus={currentStatus}
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
