import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import StyleTwoToneIcon from '@mui/icons-material/StyleTwoTone';
import PublishIcon from '@mui/icons-material/Publish';
import { Icon } from '@mui/material';
import Typography from '@mui/material/Typography';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 64,
  },
}));

const Header = () => {
  return (
    <>
      <Box>
        <AppBar position="static">
          <StyledToolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Icon>
              <StyleTwoToneIcon />
            </Icon>
            <Typography variant="h1" sx={{ fontSize: '2rem' }}>
              Credacity
            </Typography>
            <Box>
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton size="large" aria-label="form" color="inherit">
                <PublishIcon />
              </IconButton>
            </Box>
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
