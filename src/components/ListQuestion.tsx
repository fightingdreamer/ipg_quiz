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
        <div>
          <h2>
            question # {currentQuestion + 1} {objectQuestion.definition}
          </h2>
          <ul>
            {objectQuestion.options.map((question) => (
              <li key={question.id}>
                <input
                  type="radio"
                  value={'option-' + question.id}
                  checked={question.id === currentCheck.id}
                  onChange={() => setCheck(question)}
                />
                {' # id:'} {question.id} {question.answer}
              </li>
            ))}
          </ul>
          <button onClick={() => handleQuestion(currentCheck.value)}>Button placeholder</button>
        </div>
      )}
    </>
  );
};
