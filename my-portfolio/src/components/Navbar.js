import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({ handlePageChange }) {
  const [value, setValue] = React.useState('about');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Towhead Creative // Benjamin Stanfield
            </Typography>
            <Button color="inherit" onClick={() => handlePageChange("About")}>About</Button>
            <Button color="inherit" onClick={() => handlePageChange("Resume")}>Resume</Button>
            <Button color="inherit" onClick={() => handlePageChange("Contact")}>Contact</Button>
            <Button color="inherit" onClick={() => handlePageChange("Portfolio")}>Portfolio</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
}