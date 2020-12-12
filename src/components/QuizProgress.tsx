// packages

import React, { useEffect } from 'react';

// UI-Material components

import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// code

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

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
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}
