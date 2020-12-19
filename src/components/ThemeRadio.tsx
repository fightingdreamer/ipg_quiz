// packages

import React, { useContext, useState } from 'react';

// React Context API

import ThemeContext from '../context/ThemeContext';

// UI-Material components

import Radio from '@material-ui/core/Radio';

// code

export default function ThemeRadio() {
  // theme settings
  const uiMaterial = 'material';
  const uiTerminal = 'terminal';
  const uiCyberpunk = 'cyberpunk';
  const uiIsometric = 'isometric';
  const themes = [uiMaterial, uiTerminal, uiCyberpunk, uiIsometric];
  const { setTheme } = useContext(ThemeContext);
  const [currentValue, setValue] = useState(uiTerminal); // default active theme

  // theme switch
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const app = document.querySelectorAll('.App');
    const value = event.target.value;
    if (value === uiMaterial || uiTerminal || uiCyberpunk || uiIsometric) {
      app[0].classList.remove(...themes);
      app[0].classList.toggle(value);
      setValue(value);
      setTheme(value);
    }
  };

  return (
    <div>
      {/* UI-Material theme */}
      <Radio
        className="quiz-radio"
        checked={currentValue === uiMaterial}
        onChange={changeHandler}
        value={uiMaterial}
        name={`ui-${uiMaterial}-theme`}
        inputProps={{ 'aria-label': `User Interface Theme: ${uiMaterial}` }}
      />
      {/* UI-Terminal theme */}
      <Radio
        className="quiz-radio"
        checked={currentValue === uiTerminal}
        onChange={changeHandler}
        value={uiTerminal}
        name={`ui-${uiTerminal}-theme`}
        inputProps={{ 'aria-label': `User Interface Theme: ${uiTerminal}` }}
      />
      {/* UI-Cyberpunk theme placeholder */}
      {/* <Radio
        className="quiz-radio"
        disabled
        checked={currentValue === uiCyberpunk}
        onChange={changeHandler}
        value={uiCyberpunk}
        name={`ui-${uiCyberpunk}-theme`}
        inputProps={{ 'aria-label': `disabled User Interface Theme: ${uiCyberpunk}` }}
      /> */}
      {/* UI-Isometric theme placeholder */}
      {/* <Radio
        disabled
        className="quiz-radio"
        checked={currentValue === uiIsometric}
        onChange={changeHandler}
        value={uiIsometric}
        name={`ui-${uiIsometric}-theme`}
        inputProps={{ 'aria-label': `User Interface Theme: ${uiIsometric}` }}
      /> */}
    </div>
  );
}
