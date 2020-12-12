// packages

import React from 'react';

// components

import LinearWithValueLabel from './QuizProgress';

// code

export const QuizDefinition = ({ definitionQuestion }: { definitionQuestion: any }) => {
  return (
    <div className="quiz-definition">
      <LinearWithValueLabel />
      <h2>{definitionQuestion}</h2>
    </div>
  );
};

export default QuizDefinition;
