import Navigation__Issuer from './Navigation__Issuer';
import Navigation__Type from './Navigation__Type';

import Box from '@mui/material/Box';

const Navigation = () => {
  return (
    <Box>
      <Navigation__Type />
      <Navigation__Issuer />
    </Box>
  );
};

export default Navigation;
