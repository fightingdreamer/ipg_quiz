// packages

import React, { useState } from 'react';

// UI-Material components

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// code

export const MaterialSelect = () => {
  const [currentValue, setValue] = useState('default');
  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <div className="quiz-select desktop-only">
      <FormControl fullWidth>
        <Select value={currentValue} onChange={handleChange}>
          <MenuItem hidden value={'default'}>
            Select...
          </MenuItem>
          <MenuItem value={'file'}>File</MenuItem>
          <MenuItem value={'settings'}>Settings</MenuItem>
          <MenuItem value={'help'}>Help</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
