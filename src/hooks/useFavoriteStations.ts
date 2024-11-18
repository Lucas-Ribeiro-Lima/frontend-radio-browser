import { Station } from "@/domain/type";
import { useCallback, useEffect, useState } from "react";


export function useFavoriteStations() {
  const [ favoriteStations, setFavoriteStations ] = useState<Station[]>([])
  const [ filteredFavoriteStations, setFilteredFavoriteStations ] = useState<Station[]>([])

  const loadFavoriteStations = useCallback(() => {
    const favoriteStations = localStorage.getItem('favoriteStations')
    if(favoriteStations) {
      setFavoriteStations(JSON.parse(favoriteStations))
    } else {
      setFavoriteStations([])
    }
  }, [])

  const addFav = useCallback((station: Station) => {
    const newFavoriteStations = [...favoriteStations, station]
    localStorage.setItem('favoriteStations', JSON.stringify(newFavoriteStations))
    setFavoriteStations(newFavoriteStations)
  }, [favoriteStations])


  const removeFav= useCallback((uuid: string) => {
    const newFavoriteStations = favoriteStations.filter((favoriteStation) => favoriteStation.stationuuid !== uuid)
    localStorage.setItem('favoriteStations', JSON.stringify(newFavoriteStations))
    setFavoriteStations(newFavoriteStations)
  }, [favoriteStations])

  const onFav = useCallback((uuid: string) => {
    return favoriteStations.some((station) => station.stationuuid === uuid)
  }, [favoriteStations])

  const editFav = useCallback((uuid: string, name: string, tags: string) => {
    const newFavoriteStations = favoriteStations.map((station) => {
      if(station.stationuuid === uuid) {
        return {
          ...station,
          name,
          tags
        }
      }
      return station
    })
    localStorage.setItem('favoriteStations', JSON.stringify(newFavoriteStations))
    setFavoriteStations(newFavoriteStations)
  }, [favoriteStations])


  const filterFav = useCallback((name: string) => {
    const filteredStations = favoriteStations.filter((station) => {
      return station.name.toLowerCase().includes(name.toLowerCase())
    })
    setFilteredFavoriteStations(filteredStations)
  }, [favoriteStations]) 

  useEffect(() => {
    loadFavoriteStations()
  }, [loadFavoriteStations])


  return { addFav, removeFav, onFav, editFav, filterFav, filteredFavoriteStations }
}