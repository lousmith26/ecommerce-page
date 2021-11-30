import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import cartIcon from '../images/icon-cart.svg';
import logo from '../images/logo.svg';
import {Menu, MenuItem} from '@mui/material';
import avatar from '../images/image-avatar.png';
import { createTheme, ThemeProvider } from '@mui/material';

const classes = {
    navLink: {
      color: 'hsl(219, 9%, 45%)',
      textDecoration: 'none',
    },
    navButtons: {
      marginLeft: 'auto',
      marginRight: '60px',
    },
  }

const myTheme = createTheme({
    palette: {
      primary: {
        main: 'hsl(26, 100%, 55%)',
        dark: 'hsl(25, 100%, 94%)'
      },
      secondary: {
        main: 'hsl(219, 9%, 45%)',
      },
    }
});

function NavBar() {
    return (
        <ThemeProvider theme={myTheme}>
            <AppBar position="static" elevation={0} style={{background: 'transparent', margin: 20}}>
                <Toolbar variant="dense">
                    <img className="m-4" src={ logo } alt="logo"/>
                        <Box>
                            <Button sx={{ color: 'secondary.main' }}>Collections</Button>
                            <Button sx={{ color: 'secondary.main' }}>Men</Button>
                            <Button sx={{ color: 'secondary.main' }}>Women</Button>
                            <Button sx={{ color: 'secondary.main' }}>Abount</Button>
                            <Button sx={{ color: 'secondary.main' }}>Contact</Button>
                        </Box>
                    <div style={classes.navButtons}>
                        <IconButton  style={{marginRight: '25px'}}>
                            <img src={cartIcon}></img>
                        </IconButton>
                        <IconButton>
                            <img src={avatar} style={{width: '40px'}}></img>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default NavBar
