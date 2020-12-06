// packages

import React, { useState } from 'react';

// UI-Material components

import TextField from '@material-ui/core/TextField';

// code

export default function QuizInput() {
  const [name, setName] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <TextField
      id="quiz-name"
      label="Enter your name"
      value={name}
      onChange={handleChange}
      variant="outlined"
    />
  );
}
