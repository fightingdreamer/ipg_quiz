// packages

import React, { useEffect, useState } from 'react';

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
      <LinearProgressWithLabel variant="determinate" value={progress} />
    </div>
  );
}
