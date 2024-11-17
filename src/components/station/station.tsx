import { Station } from "@/domain/type"
import { Icons } from "@/components/icons"
import React from "react"

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
    <div className="flex justify-between items-center pl-2 pr-4 pb-1">
      <h2>{ title }</h2>
      { children }
    </div>
  )
}

type StationCurrentActionProps = {
  toggleSearch: () => void
}

export function StationCurrentAction({ toggleSearch }: Readonly<StationCurrentActionProps>) {
  return(
    <button onClick={toggleSearch} className="hidden lg:block">
      <div className="flex space-x-2 items-center">
        <Icons.Search/> 
        <span className="text-sm">
          Search stations
        </span>
      </div>
    </button>
  )
}

type StationCurrentProps = {
  station: Station
}

export function StationCurrentContent({ station }: Readonly<StationCurrentProps>) {
  const { name } = station
  return(
    <div className="
        flex p-2 justify-between 
        bg-slate-400/50 text-black rounded-lg
        shadow-sm shadow-slate-600
        hover:bg-slate-300">
      <div className="flex space-x-4">
        <button><Icons.Play/></button>
        <div className="text-lg">{name}</div>
      </div>
    </div>
  )
}