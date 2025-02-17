import type React from "react"

import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from 'next/font/google';
import ThemeRegistry from "./ThemeRegistry"

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
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
