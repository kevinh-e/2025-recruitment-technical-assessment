"use client"

import type React from "react"
import { createContext, useState, useContext } from "react"
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles"

type ThemeContextType = {
  toggleTheme: () => void
  isDarkMode: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#ef6c00",
      },
      background: {
        default: isDarkMode ? "rgb(16, 18, 20)" : "#fff",
        paper: isDarkMode ? "rgb(26, 28, 30)" : "#fff",
      },
    },
  })

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
