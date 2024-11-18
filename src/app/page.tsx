'use client'

import { StationFavorites } from "@/components/favorites";
import { Header } from "@/components/header";
import { NavBar } from "@/components/navbar";
import { Search } from "@/components/search";
import { Station } from "@/components/station";
import { Separator } from "@/components/ui/separator";
import { SearchBarContext } from "@/contexts/searchbarProvider";
import { useFavoriteStations } from "@/hooks/useFavoriteStations";
import { useRadio } from "@/hooks/useRadio";
import { useSearchStations } from "@/hooks/useSearchStations";
import { radioService } from "@/services";
import { useContext } from "react";

export default function Home() {
  const { isOpen, toggle} = useContext(SearchBarContext)
  const { stations, filterSearch } = useSearchStations(radioService)
  const { filteredFavoriteStations, addFav, removeFav, editFav, filterFav, onFav  } = useFavoriteStations()
  const { station: currStation, isPlaying, changeStation, toggle: toggleRadio } = useRadio()

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
            <Station.HeaderAction filterFavorite={filterFav}/>
          </Station.Header>
          <Station.Content station={currStation} toogle={toggleRadio} isPlaying={isPlaying}/>
          <Separator className="my-4 bg-slate-400"/>
          <StationFavorites.List.Wrapper>
            {filteredFavoriteStations.map((station) => {
              return(
                <StationFavorites.List.Item 
                  key={station.stationuuid} 
                  station={station} 
                  changeStation={changeStation} 
                  removeStationFavorite={removeFav}
                  editStationFavorite={editFav}/>
              )
            })}
          </StationFavorites.List.Wrapper>
        </Station.Wrapper>
      </main>
      <Search.Wrapper isOpen={isOpen}>
        <Search.Content toggleSearch={toggle} filterSearch={filterSearch}>
          <Search.List.Wrapper>
            {stations.map((station) => {
              return(
                <Search.List.Item 
                  key={station.stationuuid} 
                  station={station} 
                  addStationFavorite={addFav}
                  onFavorite={onFav}
                  />
              )
            })}
          </Search.List.Wrapper>
          <Search.List.Pagination filterSearch={filterSearch}/>
        </Search.Content>
      </Search.Wrapper>
    </div>
  )
}