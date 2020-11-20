// packages

import React, { useState } from 'react';

// utils

import { getQuestion } from '../utils/getQuestion';
import { QuizStart } from '../components/QuizStart';

// code

export const ListQuestion = () => {
  // hooks default
  const [currentScore, setScore] = useState(0);
  const [currentQuestion, setQuestion] = useState(0);
  const [currentStatus, setStatus] = useState(false);
  const objectQuestion = getQuestion[currentQuestion];

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
        <div className="quiz-result">
          <h2>
            Game over, score: {currentScore} out of {getQuestion.length}
          </h2>
          <button className="btn-action">
            <span>Action</span>
          </button>
          <button className="btn-side">
            <span>Side</span>
          </button>
        </div>
      ) : (
        <>
          {currentData && currentData.activeQuestion !== '' ? (
            <div className="quiz-wrapper">
              <div className="quiz-panel">
                <div>
                  (question: {currentQuestion + 1} / {getQuestion.length})
                </div>
                <div>{setCurrentTime}</div>
              </div>
              <div className="quiz-definition">
                <h2>
                  {objectQuestion.id} - {objectQuestion.definition}
                </h2>
              </div>
              <ul>
                {objectQuestion.options.map((answer) => (
                  <li key={answer.id}>
                    <button onClick={() => handleQuestion(answer.value)}>
                      <span>
                        name id: {answer.id} - {answer.answer}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
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
