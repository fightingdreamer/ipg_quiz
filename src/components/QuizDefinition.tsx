// packages

import React from 'react';

// code

export const QuizDefinition = ({ definitionQuestion }: { definitionQuestion: any }) => {
  return (
    <div className="quiz-definition">
      <h2>{definitionQuestion}</h2>
    </div>
  );
};

export default QuizDefinition;
