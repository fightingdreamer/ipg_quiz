// packages

import React, { useState } from 'react';

// UI-Terminal components

import Select from 'react-select'; // external input control
import nesTheme from 'react-select-nes-css-theme'; // external theme object

// code

export const TerminalSelect = () => {
  const [currentValue, setValue] = useState();

  return (
    <div className="quiz-select">
      <Select
        value={currentValue}
        styles={nesTheme} // external theme object passed as a prop
        onChange={setValue}
        options={[
          { value: 'file', label: 'file' },
          { value: 'settings', label: 'settings' },
          { value: 'help', label: 'help' },
        ]}
      />
    </div>
  );
};
