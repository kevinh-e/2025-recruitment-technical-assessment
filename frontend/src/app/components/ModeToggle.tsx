"use client"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DarkMode } from "@mui/icons-material"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant={theme === "light" ? "outline" : "default"}
      size="icon"
      onClick={() => setTheme((prev) => prev === "light" ? "dark" : "light")}
    >
      <DarkMode />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}


