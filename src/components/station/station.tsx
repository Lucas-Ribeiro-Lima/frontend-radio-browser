import { Icons } from "@/components/icons"
import { Station } from "@/domain/type"
import { Input } from "../ui/input"
import { useEffect } from "react"

type StationCurrentWrapperProps = {
  children: React.ReactNode
}

export function StationCurrentWrapper({ children }: Readonly<StationCurrentWrapperProps>) {
  return(
    <div className="flex flex-col flex-1 mt-4">
      { children }
    </div>
  )
}

type StationCurrentHeaderProps = {
  title: string,
  children: React.ReactNode
}

export function StationCurrentHeader({ title, children }: Readonly<StationCurrentHeaderProps>) {
  return(
    <div className="flex justify-between items-center pl-2 pb-1">
      <h2>{ title }</h2>
      { children }
    </div>
  )
}

type StationCurrentActionProps = {
  filterFavorite: (name: string) => void
}

export function StationCurrentAction({ filterFavorite }: Readonly<StationCurrentActionProps>) {
  useEffect(() => {
    filterFavorite("")
  }, [filterFavorite])

  return(
    <button className="hidden lg:block">
      <div className="flex space-x-2 items-center">
        <Icons.Search/> 
        <Input 
          onChange={(e) => filterFavorite(e.target.value)} 
          placeholder="Search stations" 
          className="w-48 border-none"/>
        </div>
    </button>
  )
}

type StationCurrentProps = {
  station: Station | null
  isPlaying: boolean
  toogle: () => void 
}

export function StationCurrentContent({ station, toogle, isPlaying  }: Readonly<StationCurrentProps>) {
  return(
    <div className="
        flex p-2 justify-between 
        bg-slate-400/50 text-black rounded-lg
        shadow-sm shadow-slate-600
        hover:bg-slate-300">
      <div className="flex space-x-4">
        <button onClick={toogle}>
          {isPlaying &&  <Icons.Stop/>}
          {!isPlaying &&  <Icons.Play/>}
        </button>
        <div className="text-lg">{station?.name || "Select a radio"}</div>
      </div>
    </div>
  )
}