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

export const QuizStart: React.FC<{ onFormSubmit: () => void }> = ({ onFormSubmit }) => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);
  const { createUser } = useContext(UserContext);
  const [name, setName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    createUser(name);
    onFormSubmit();
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
        <form className="quiz-form" noValidate onSubmit={onHandleSubmit} autoComplete="off">
          <div className="quiz-input">
            <TextField
              id="quiz-name"
              label="Enter your name"
              value={name}
              onChange={handleChange}
              variant="outlined"
            />
          </div>
          <div className="quiz-btn" onClick={onHandleSubmit}>
            <BtnCta />
          </div>
        </form>
      </div>
    </>
  );
};
