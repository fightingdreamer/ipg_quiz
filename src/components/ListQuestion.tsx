// packages

import React, { useState } from 'react';

// utils

import { OptionQuestion, getQuestion } from '../utils/getQuestion';

// code

export const ListQuestion = () => {
  // hooks default
  const [currentScore, setScore] = useState(0);
  const [currentQuestion, setQuestion] = useState(0);
  const [currentStatus, setStatus] = useState(false);
  const [currentCheck, setCheck] = useState({} as OptionQuestion);
  const objectQuestion = getQuestion[currentQuestion];

  // time & question settings

  const [currentTime, setTime] = useState(20);
  const [currentData, setData] = useState({
    currentTime: 20,
    statusTime: 'stop',
    setQuestion: null,
    activeQuestion: '',
  });

  const timer = () => {
    let count = currentData.currentTime;
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
        <h2>
          Game over, score: {currentScore} out of {getQuestion.length}
        </h2>
      ) : (
        <>
          {currentData && currentData.activeQuestion !== '' ? (
            <div>
              <h2>
                {objectQuestion.id} - {objectQuestion.definition} (question: {currentQuestion + 1} /{' '}
                {getQuestion.length})
              </h2>
              <ul>
                {objectQuestion.options.map((answer) => (
                  <li key={answer.id}>
                    <button onClick={() => setCheck(answer)}>
                      name id: {answer.id} - {answer.answer}
                    </button>
                  </li>
                ))}
              </ul>
              <div>
                <div>{currentTime}</div>
              </div>
              <button onClick={() => handleQuestion(currentCheck.value)}>Button placeholder</button>
            </div>
          ) : (
            <button
              onClick={() => {
                setData({ ...currentData, activeQuestion: 'q1' });
                timer();
              }}
            >
              Start
            </button>
          )}
        </>
      )}
    </>
  );
};
