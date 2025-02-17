'use client';
import { createTheme, type PaletteOptions } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#ef6c00",
  },
  background: {
    default: "rgb(255, 255, 255)",
  },
}

const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#ef6c00",
  },
  background: {
    default: "rgb(16, 18, 20)",
    paper: "rgb(26, 28, 30)",
  },
}

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: lightPalette,
    },
    dark: {
      palette: darkPalette,
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme;
