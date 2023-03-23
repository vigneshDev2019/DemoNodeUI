import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';

// const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

export default function SearchableDropdown(props) {

  const handleClear = () => {
    props.setValue('');
  };
  return (
    <Autocomplete
    style={{maxWidth: '20rem', minWidth:"15rem", margin:"1rem"}}
      value={props.value}
      onChange={(event, newValue) => {
        props.setValue(newValue);
      }}
       disabled={props.disabled}
      options={props.options}

      renderInput={(params) => (
        <TextField
          {...params}
          label={props.name}
          disabled={props.disabled}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {props.value && props.value.length > 0 && (
                  <ClearIcon
                    onClick={handleClear}
                    sx={{ cursor: 'pointer' }}
                  />
                )}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
