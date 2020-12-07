// packages

import React from 'react';

// code

export const ItemQuestion = ({
  options,
  handleValue,
  isTerminal,
}: {
  options: any;
  handleValue: any;
  isTerminal: any;
}) => {
  return (
    <ul>
      {options.map((answer) => {
        const question = answer.answer;
        const charCounter = question.length + (isTerminal ? 4 : 0); // UI-Terminal brackets outer space fix

        return (
          <li key={answer.id}>
            <button
              className="btn-side MuiButton-root MuiButton-outlined"
              onClick={() => handleValue(answer.value)}
            >
              <span
                className="quiz-type"
                style={{
                  width: `${charCounter}ch`,
                  animation: `animation-typing 1s steps(${charCounter}), animation-blink 0.5s step-end 5 alternate`,
                }}
              >
                {question}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemQuestion;
