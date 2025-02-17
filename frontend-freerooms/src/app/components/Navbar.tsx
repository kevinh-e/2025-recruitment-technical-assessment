"use client"

import type React from "react"
import { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { useTheme } from "../ThemeContext"
import { DarkMode, Map, GridView, Search, CenterFocusWeakTwoTone } from "@mui/icons-material"
import { Box, styled } from "@mui/material"
import { Josefin_Sans } from "next/font/google"
import Image from "next/image"

const SquareIconButton = styled(Button)({
  minWidth: 35,
  width: 38,
  height: 38,
  padding: 0,
  borderRadius: 4,
});

const LogoText = styled(Typography)({
  display: "flex",
  alignItems: "center",
  lineHeight: "normal",
  paddingTop: 4,
})

const josefinSans = Josefin_Sans({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
})

const Navbar = () => {
  const [alignment, setAlignment] = useState<string | null>("left")
  const { toggleTheme, isDarkMode } = useTheme()
  const [logoOpen, setLogoOpen] = useState(true);

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment)
  }

  return (
    <AppBar position="static" color="background">
      <Toolbar sx={{ height: 50, display: "flex", alignItems: "center" }}>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            src={logoOpen ? "/assets/freeRoomsLogo.png" : "/assets/freeroomsDoorClosed.png"}
            width={45}
            height={45}
            alt="freeRooms logo"
            onClick={() => setLogoOpen((prev) => !prev)}
          />
          <LogoText color="primary" variant="h4" sx={{ fontFamily: josefinSans.style.fontFamily }}>
            Freerooms
          </LogoText>
        </Box>
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


