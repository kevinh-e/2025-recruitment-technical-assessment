import type React from "react"

import "./globals.css"
import type { Metadata } from "next"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "./ThemeContext"
import Navbar from "./components/Navbar.tsx"
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Freerooms",
  description: "Find free rooms easily",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
