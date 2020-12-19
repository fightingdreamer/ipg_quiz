// packages

import React from 'react';

// code

export const ItemQuestion = ({
  options,
  valueHandler,
  isTerminal,
}: {
  options: any;
  valueHandler: any;
  isTerminal: any;
}) => {
  return (
    <ul>
      {options.map((answer) => {
        const question = answer.answer;
        const charCounter = question.length + (isTerminal ? 4 : 1); // UI-Terminal & UI-Material to fix

        return (
          <li key={answer.id}>
            <button
              className="btn-side MuiButton-root MuiButton-outlined"
              onClick={() => valueHandler(answer.value)}
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
