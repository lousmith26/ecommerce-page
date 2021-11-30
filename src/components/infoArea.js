import React from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'

function InfoArea() {
    return (
            <Box
                textAlign="center"
                width="100%"
                height="30rem"
                paddingY="3rem">
                <Typography 
                    sx={{fontSize: '18px', marginBottom: '1rem'}}
                    variant="h6"
                    fontWeight="700"
                    textAlign="left"
                    color="primary">
                        Sneaker Company
                </Typography>
                <Typography
                    sx={{marginBottom: '1.2rem'}}
                    variant="h3"
                    fontWeight="700"
                    textAlign="left">
                    Fall Limited Edition Sneakers
                </Typography>
                <Typography
                    sx={{marginBottom: '2rem'}}
                    fontWeight="500"
                    textAlign="left"
                    color="secondary.main">
                    These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everthing the weather can offer.
                </Typography>
                <Box
                    display="flex">
                    
                    <Typography
                        sx={{fontSize: '30px', marginRight: '1rem'}}
                        variant="h3"
                        fontWeight="700"
                        textAlign="left">
                        $125.00
                    </Typography>
                    <Chip 
                        display="inline"
                        label="50%" 
                        variant="filled"
                        fontWeight="700"
                        color="primary" />
                </Box>
                <Typography
                    sx={{fontSize: '20px', textDecoration: 'line-through', marginTop: '0.5rem'}}
                    align="left"
                    color="secondary"
                    variant="h3"
                    fontWeight="700">
                    $250.00
                </Typography>
            </Box>
    )
}

export default InfoArea
