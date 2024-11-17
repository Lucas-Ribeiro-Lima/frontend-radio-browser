import { Station } from "@/domain/type"
import { Icons } from "../icons"

type StationListWrapperProps = {
  children: React.ReactNode
}

export function StationListWrapper({ children }:  Readonly<StationListWrapperProps>) {
  return(
    <ol className="flex-1 space-y-2 rounded-lg p-4">
      {children}
    </ol>
  )
}

type StationListItemProps = {
  station: Station
  playStation: (station: Station) => void
  removeStationFavorite: (station: Station) => void
}

export function StationListItem({ station }: Readonly<StationListItemProps>) {
  const { name, tags } = station
  return(
    <li className="
        flex p-2 justify-between
        bg-slate-400/50 text-black rounded-lg
        shadow-sm shadow-slate-600
        hover:bg-slate-300">
      <div className="flex space-x-4">
        <button className="hover:text-sky-500"><Icons.Play /></button>
        <div>
          <div className="text-lg">{name}</div>
          <div className="text-sm text-slate-600">{tags}</div>

        </div>
      </div>
      <div className="flex space-x-2">
        <button className="hidden lg:block"><Icons.Pencil/> </button>
        <button><Icons.Trash/></button>
      </div>
    </li>
  )
}