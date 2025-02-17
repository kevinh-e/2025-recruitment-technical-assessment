'use client'
import React from 'react'
import ModeSwitch from '@/components/ModeSwitch'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='inherit'>
        <Toolbar>
          <Image
            src="/assets/freeRoomsLogo.png"
            width="50"
            height="50"
            alt='Freerooms Logo'
          />
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            Freerooms
          </Typography>
          <ModeSwitch />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar

