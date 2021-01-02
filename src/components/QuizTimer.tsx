// packages

import React from 'react';

// components

import Countdown from 'react-countdown';

// code

const GameOver = () => <span>ok</span>;
const renderer = ({ seconds, completed }) => {
  if (completed) {
    return <GameOver />;
  } else {
    return <span>{seconds}</span>;
  }
};

export const QuizTimer = () => {
  const time = Date.now() + 20000;
  return <Countdown date={time} renderer={renderer} />;
};

export default QuizTimer;
