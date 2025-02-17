'use client'
import { Container } from "@mui/material";
import * as data from '@/data.json';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container className="">
        {data.map((room) => {

        })}
      </Container>
    </main>
  )
}


