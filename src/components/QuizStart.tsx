// packages

import React, { useContext, useState } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';
import UserContext from '../context/UserContext';

// components

import { ReactComponent as Logo } from '../styles/img/cube-lines.svg';
import { LogoCube } from './logo/LogoCube';
import { BtnStart } from './ui/BtnSet';

// UI-Material components

import TextField from '@material-ui/core/TextField';

// UI-Terminal components

import { TextInput } from 'nes-react';

// code

export const QuizStart: React.FC<{ onFormSubmit: () => void }> = ({ onFormSubmit }) => {
  const { isMaterial, isTerminal } = useContext(ThemeContext);
  const { createUser } = useContext(UserContext);
  const [name, setName] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setName(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createUser(name);
    onFormSubmit();
  };

  return (
    <>
      <div className="quiz-panel">
        <h1 className="quiz-title">QuizBox</h1>
      </div>
      <div className="quiz-start">
        <div className="quiz-logo">
          {isMaterial && <LogoCube value="any" index="any" />}
          {isTerminal && <Logo />}
        </div>
        <form className="quiz-form" noValidate onSubmit={submitHandler} autoComplete="off">
          <div className="quiz-input">
            {isMaterial && (
              <TextField
                id="material-name"
                label="Enter your name"
                value={name}
                onChange={changeHandler}
                variant="outlined"
              />
            )}
            {isTerminal && (
              <TextInput
                id="terminal-name"
                label="Enter your name"
                value={name}
                // @ts-ignore
                onChange={changeHandler}
              />
            )}
          </div>
          <div className="quiz-btn" onClick={submitHandler}>
            <BtnStart />
          </div>
        </form>
      </div>
    </>
  );
};
