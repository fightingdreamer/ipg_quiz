// packages

import React, { useContext, useState } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// UI-Material components

import Radio from '@material-ui/core/Radio';

// code

export default function ThemeRadio() {
  // theme settings
  const uiMaterial: string = 'material';
  const uiTerminal: string = 'terminal';
  const themes: Array<string> = [uiMaterial, uiTerminal];
  const { setTheme } = useContext(ThemeContext);
  const [currentValue, setValue] = useState(uiTerminal); // default active theme

  // theme switch
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const app = document.querySelectorAll('.App');
    const value: string = event.target.value;
    if (value === uiMaterial || uiTerminal) {
      app[0].classList.remove(...themes);
      app[0].classList.toggle(value);
      setValue(value);
      setTheme(value);
    }
  };

  return (
    <div>
      <Radio
        className="quiz-radio"
        checked={currentValue === uiTerminal}
        onChange={changeHandler}
        value={uiTerminal}
        name={`ui-${uiTerminal}-theme`}
        inputProps={{ 'aria-label': `User Interface Theme: ${uiTerminal}` }}
      />
      <Radio
        className="quiz-radio"
        checked={currentValue === uiMaterial}
        onChange={changeHandler}
        value={uiMaterial}
        name={`ui-${uiMaterial}-theme`}
        inputProps={{ 'aria-label': `User Interface Theme: ${uiMaterial}` }}
      />
    </div>
  );
}
