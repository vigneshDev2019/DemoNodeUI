import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';


export function MyDropdown(props) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleOptionChange}
      displayEmpty
    >
      <MenuItem value="" disabled>
        Select an option
      </MenuItem>
      {props.options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}

