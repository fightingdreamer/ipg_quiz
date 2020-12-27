// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// code

export const QuizDefinition = ({ definitionQuestion }: { definitionQuestion: any }) => {
  const { isTerminal } = useContext(ThemeContext);
  return (
    <div className="quiz-definition">
      <h2>
        {isTerminal && <span className="quiz-bullet">Q:</span>}
        {definitionQuestion}
      </h2>
    </div>
  );
};

export default QuizDefinition;
