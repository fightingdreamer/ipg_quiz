// packages

import React, { useContext } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// UI-Material components

import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

// code

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%">
        <LinearProgress {...props} />
      </Box>
    </Box>
  );
}

export default function QuizProgress({ value }: { value: number }) {
  const { isMaterial } = useContext(ThemeContext);

  return (
    <div className="quiz-progress">
      {isMaterial && <LinearProgressWithLabel variant="determinate" value={value} />}
    </div>
  );
}
