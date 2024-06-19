// packages

import React, { useState } from 'react';

// UI-Terminal components

import Select from 'react-select'; // external input control
const nesTheme = require("react-select-nes-css-theme");

// code

export const TerminalSelect = () => {
  const [currentValue, setValue] = useState();

  return (
    <div className="quiz-select mobile-off">
      <Select
        value={currentValue}
        styles={nesTheme} // external theme object passed as a prop
        onChange={(v) => setValue(v as any)}
        options={[
          { value: 'file', label: 'file' },
          { value: 'settings', label: 'settings' },
          { value: 'help', label: 'help' },
        ]}
      />
    </div>
  );
};
