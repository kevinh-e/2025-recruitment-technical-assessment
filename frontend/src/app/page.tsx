'use client'
import { Button } from "@/components/ui/button";
import RoomCard from "./components/RoomCard";
import * as data from "./data.json";
import { FilterAlt, FilterList } from "@mui/icons-material";
import { SearchInput } from "@/components/ui/searchInput";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section aria-label="Search and Filters" className="w-full mt-4 px-4 flex flex-row justify-between gap-2">
        <Button
          variant="outline"
        >
          <FilterAlt /> Filter
        </Button>
        <SearchInput
          className="container"
        />
        <Button
          variant="outline"
        >
          <FilterList /> Sort
        </Button>
      </section>
      <section aria-label="Room list" className="w-full mt-4 px-4 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[20px]">
        {data.map((room, index) => {
          return (
            <RoomCard
              name={room.name}
              buildingPicture={room.building_picture}
              roomsAvailable={room.rooms_available}
              key={index}
            />
          )
        })}
      </section>
    </main>
  );
}
