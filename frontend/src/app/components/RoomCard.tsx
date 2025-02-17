import React from 'react'
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

export function RoomCard({ name, roomsAvailable, buildingPicture }) {
  return (
    <Card
      className='relative flex flex-row justify-between sm:flex-col-reverse sm:min-h-48 lg:min-h-72 xl:min-h-96 overflow-hidden'
    >
      <Image
        src={`/assets/${buildingPicture}`}
        alt={`${name}`}
        fill={true}
        style={{ objectFit: "cover" }}
        className='absolute inset-0 z-0 brightness-50 sm:brightness-100'
      />
      <CardHeader className='relative p-4'>
        <CardTitle className='text-primary-foreground sm:bg-primary p-6 rounded-md'>{name}</CardTitle>
      </CardHeader>
      <CardFooter className='relative py-0 sm:py-4 px-4 sm:self-end'>
        <div className='flex flex-row justify-center items-center text-sm bg-secondary p-3 px-4 rounded-2xl'>
          <div className='rounded-full bg-green-500 h-3 w-3 mr-2'>
          </div>
          <p className='sm:hidden'>
            {roomsAvailable} / {roomsAvailable}
          </p>
          <p className='hidden sm:block'>
            {roomsAvailable} rooms available
          </p>
        </div>
      </CardFooter>
    </Card >
  )
}

export default RoomCard
