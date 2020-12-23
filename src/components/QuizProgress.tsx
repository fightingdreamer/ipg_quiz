// packages

import React, { useContext, useEffect, useState } from 'react';

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

export default function QuizProgress() {
  const [progress, setProgress] = useState(10);
  const { isMaterial } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="quiz-progress">
      {isMaterial && <LinearProgressWithLabel variant="determinate" value={progress} />}
    </div>
  );
}
