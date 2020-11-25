// packages

import React, { useState } from 'react';

// UI-Material components

import Radio from '@material-ui/core/Radio';

// code

export default function ThemeRadio() {
  const uiMaterial = 'material';
  const uiTerminal = 'terminal';
  const uiCyberpunk = 'cyberpunk';
  const uiIsometric = 'isometric';
  const themes = [uiMaterial, uiTerminal, uiCyberpunk, uiIsometric];

  const [currentValue, setValue] = useState(uiMaterial);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const app = document.querySelectorAll('.App');
    const value = event.target.value;
    if (value === uiMaterial || uiTerminal || uiCyberpunk || uiIsometric) {
      app[0].classList.remove(...themes);
      app[0].classList.toggle(value);
      setValue(value);
    }
  };

  return (
    <div>
      <Radio
        className="quiz-radio"
        checked={currentValue === uiMaterial}
        onChange={handleChange}
        value={uiMaterial}
        name={`ui-${uiMaterial}-theme`}
        inputProps={{ 'aria-label': `User Interface Theme: ${uiMaterial}` }}
      />
      <Radio
        className="quiz-radio"
        checked={currentValue === uiTerminal}
        onChange={handleChange}
        value={uiTerminal}
        name={`ui-${uiTerminal}-theme`}
        inputProps={{ 'aria-label': `User Interface Theme: ${uiTerminal}` }}
      />
      <Radio
        className="quiz-radio"
        disabled
        checked={currentValue === uiCyberpunk}
        onChange={handleChange}
        value={uiCyberpunk}
        name={`ui-${uiCyberpunk}-theme`}
        inputProps={{ 'aria-label': `disabled User Interface Theme: ${uiCyberpunk}` }}
      />
      {/* <Radio
        disabled
        className="quiz-radio"
        checked={currentValue === uiIsometric}
        onChange={handleChange}
        value={uiIsometric}
        name={`ui-${uiIsometric}-theme`}
        inputProps={{ 'aria-label': `User Interface Theme: ${uiIsometric}` }}
      /> */}
    </div>
  );
}
