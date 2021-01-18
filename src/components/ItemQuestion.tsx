// packages

import React from 'react';

// detect device type

import { isBrowser, isMobile } from 'react-device-detect';

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
        const question: string = answer.answer;
        const charCounter: number = question.length + (isTerminal && isBrowser ? 4 : isTerminal && isMobile ? 3 : 1);
        const terminalBullet: string = `${answer.id.slice(0, -1).toUpperCase()}:`;

        return (
          <li key={answer.id}>
            {isTerminal && <span className="quiz-bullet">{terminalBullet}</span>}
            <button className="btn-side MuiButton-root MuiButton-outlined" onClick={() => valueHandler(answer.value)}>
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
