"use client"
import { useTheme } from "@mui/material/styles"
import Button from "@mui/material/Button"
import { DarkMode } from "@mui/icons-material"
import { useColorScheme } from "@mui/material/styles"

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme()

  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light")
  }

  return (
    <Button
      color="primary"
      size="medium"
      onClick={toggleColorMode}
      variant={mode === "light" ? "outlined" : "contained"}
    >
      <DarkMode />
    </Button>
  )
}
