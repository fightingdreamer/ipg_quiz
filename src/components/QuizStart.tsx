// packages

import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';

// React Context API

import ThemeContext from '../context/ThemeContext';
import UserContext from '../context/UserContext';

// components

import { SelectSet } from './SelectSet';
import { IconSet } from './IconSet';
import { ReactComponent as Logo } from '../styles/img/cube-lines.svg';
import { LogoCube } from './LogoCube';
import { BtnCta } from './BtnSet';

// code

export const QuizStart: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);
  const { createUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <>
      <div className="quiz-panel">
        <SelectSet />
        <IconSet />
      </div>
      <div className="quiz-start">
        <div className="quiz-logo">
          {isMaterial && <LogoCube value="any" index="any" />}
          {isTerminal && <Logo />}
        </div>
        <form className="quiz-form" noValidate autoComplete="off">
          <div className="quiz-input">
            <TextField
              id="quiz-name"
              label="Enter your name"
              value={name}
              onChange={handleChange}
              variant="outlined"
            />
          </div>
          <div
            className="quiz-btn"
            onClick={() => {
              createUser(name);
              onClick();
            }}
          >
            <BtnCta />
          </div>
        </form>
      </div>
    </>
  );
};
