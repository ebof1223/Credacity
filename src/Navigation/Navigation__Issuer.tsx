import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Navigation__Issuer = () => {
  const [alignment, setAlignment] = React.useState('all');

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
      aria-label="Platform"
      fullWidth={true}
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="american_express">American Express</ToggleButton>
      <ToggleButton value="chase">Chase</ToggleButton>
      <ToggleButton value="capital_one">Capital One</ToggleButton>
      <ToggleButton value="bank_of_america">Bank of America</ToggleButton>
      <ToggleButton value="citi">Citi</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Navigation__Issuer;
