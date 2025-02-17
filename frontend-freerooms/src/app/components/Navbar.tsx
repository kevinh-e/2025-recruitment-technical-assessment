"use client"

import type React from "react"
import { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { useTheme } from "../ThemeContext"
import { DarkMode, Map, GridView, Search } from "@mui/icons-material"
import { IconButton, styled } from "@mui/material"
import { Josefin_Sans } from "next/font/google"

const SquareIconButton = styled(Button)({
  minWidth: 40,
  width: 40,
  height: 40,
  padding: 0,
  borderRadius: 8,
});

const josefinSans = Josefin_Sans({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
})

const Navbar = () => {
  const [alignment, setAlignment] = useState<string | null>("left")
  const { toggleTheme, isDarkMode } = useTheme()
  const [logoOpen, setLogoOpen] = useState(false);

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment)
  }

  return (
    <AppBar position="static" color="background" className="border-b border-gray-200">
      <Toolbar>
        <IconButton>
          <Image>
          </Image>
        </IconButton>
        <Typography variant="h4" color="primary" component="div" sx={{ flexGrow: 1, fontFamily: josefinSans.style.fontFamily }}>
          Freerooms
        </IDBVersionChangeEvent>
        <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="nav buttons" sx={{ gap: 1 }}>
          <SquareIconButton
            color="primary"
            onClick={toggleTheme}
            aria-label="toggle dark mode"
            variant="outlined"
          >
            <Search />
          </SquareIconButton>
          <SquareIconButton
            color="primary"
            onClick={toggleTheme}
            aria-label="toggle dark mode"
            variant="outlined"
          >
            <GridView />
          </SquareIconButton>
          <SquareIconButton
            color="primary"
            onClick={toggleTheme}
            aria-label="toggle dark mode"
            variant="outlined"
          >
            <Map />
          </SquareIconButton>
          <SquareIconButton
            color="primary"
            onClick={toggleTheme}
            aria-label="toggle dark mode"
            variant={isDarkMode ? "contained" : "outlined"}
          >
            <DarkMode />
          </SquareIconButton>
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar >
  )
}

export default Navbar


