'use client'
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Button } from "@/components/ui/button"
import { GridView, Map, Search } from "@mui/icons-material"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [logoOpen, setLogoOpen] = useState(true);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src={logoOpen ? "/assets/freeRoomsLogo.png" : "/assets/freeroomsDoorClosed.png"}
              alt="freerooms logo"
              width={50}
              height={50}
              onClick={() => setLogoOpen((prev) => !prev)}
            />
            <Link href="/" className="text-2xl font-bold text-primary">
              Freerooms
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                >
                  <Search />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                >
                  <GridView />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                >
                  <Map />
                </Button>

                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


