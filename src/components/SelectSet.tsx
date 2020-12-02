// packages

import React, { useState } from 'react';

// components

import Select from 'react-select'; // external input control
import nesTheme from 'react-select-nes-css-theme'; // external theme object

// code

export const SelectSet = () => {
  const [currentValue, setValue] = useState();

  return (
    <Select
      className="quiz-select"
      value={currentValue}
      styles={nesTheme} // external theme object passed as a prop
      onChange={setValue}
      options={[
        { value: 0, label: '1' },
        { value: 1, label: '2' },
      ]}
    />
  );
};
