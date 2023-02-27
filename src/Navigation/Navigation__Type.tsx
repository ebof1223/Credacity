import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { jsx } from '@emotion/react';

const Navigation__Type = () => {
  const [alignment, setAlignment] = React.useState('personal');

  const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const newAlignment = event.target as HTMLInputElement;
    setAlignment(newAlignment.value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Credit Card Type"
      fullWidth={true}
    >
      <ToggleButton value="personal">Personal</ToggleButton>
      <ToggleButton value="business">Business</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Navigation__Type;
