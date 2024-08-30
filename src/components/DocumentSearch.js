import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

function DocumentSearch({ onSearchChange }) {
  const theme = useTheme();

  const handleChange = (event) => {
    onSearchChange(event.target.value);  
  };

  return (
    <TextField
      label="Search Documents"
      variant="outlined"
      fullWidth
      margin="normal"
      onChange={handleChange}  
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default DocumentSearch;
