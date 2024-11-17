'use client'

import { StationFavorites } from "@/components/favorites";
import { Header } from "@/components/header";
import { NavBar } from "@/components/navbar";
import { Search } from "@/components/search";
import { Station } from "@/components/station";
import { SearchBarContext } from "@/contexts/searchbarProvider";
import { useContext } from "react";

export default function Home() {
  const { isOpen, toggle} = useContext(SearchBarContext)

  const mockStations = [
    { name: "Station 1", codec: "mp3", country:"BR", language: "Portuguese", stationuuid: "0", url: "" ,},
    { name: "Station 2", codec: "mp3", country:"BR", language: "Portuguese", stationuuid: "0", url: "" ,},
    { name: "Station 3", codec: "mp3", country:"BR", language: "Portuguese", stationuuid: "0", url: "" ,},
  ]


  return(
    <div className="lg:flex lg:flex-row-reverse h-full">
      <main className="flex flex-1 flex-col p-4">
        <NavBar.Wrapper>  
          <NavBar.Content toggleSearch={toggle} searchOpen={isOpen}/>
        </NavBar.Wrapper>
        <Header.Wrapper>
          <Header.Title title="Radio Browser"/>
        </Header.Wrapper>
        <Station.Wrapper>
          <Station.Header title="Favorite radios">
            <Station.HeaderAction toggleSearch={toggle}/>
          </Station.Header>
          <Station.Content station={mockStations[0]}/>
          <StationFavorites.List.Wrapper>
            {mockStations.map((station) => {
              return(
                <StationFavorites.List.Item key={station.name} station={station} playStation={() => {}} removeStationFavorite={() => {}}/>
              )
            })}
          </StationFavorites.List.Wrapper>
        </Station.Wrapper>
      </main>
      <Search.Wrapper isOpen={isOpen}>
        <Search.Content  isOpen={isOpen} toggleSearch={toggle}>
          <Search.List.Wrapper>
            {mockStations.map((station) => {
              return(
                <Search.List.Item key={station.name} station={station} playStation={() => {}} removeStationFavorite={() => {}}/>
              )
            })}
          </Search.List.Wrapper>
        </Search.Content>
      </Search.Wrapper>
    </div>
  )
}