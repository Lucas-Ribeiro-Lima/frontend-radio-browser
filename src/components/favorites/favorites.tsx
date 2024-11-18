import { Station } from "@/domain/type"
import { useHandleEdit } from "@/hooks/useHandleEdit"
import { Icons } from "../icons"
import { Input } from "../ui/input"

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
  changeStation: (station: Station) => void
  editStationFavorite: (uuid: string, name: string, tags: string) => void
  removeStationFavorite: (uuid: string) => void
}

export function StationListItem({ station, changeStation, editStationFavorite, removeStationFavorite }: Readonly<StationListItemProps>) {
  const { stationuuid, name, tags } = station
  const { onChange, saveChange, isEditing, toggleEdit } = useHandleEdit({ stationuuid, name, tags, editFunction: editStationFavorite })

  return(
    <li className="
        flex p-2 justify-between
        bg-slate-400/50 text-black rounded-lg
        shadow-sm shadow-slate-600
        hover:bg-slate-300">
      <div className="flex space-x-4">
        <button onClick={() => changeStation(station)} className="hover:text-sky-500"><Icons.Play /></button>
        <div>
          {!isEditing && <div className="text-lg">{name}</div>}
          {isEditing && <Input placeholder={name} onChange={onChange} onBlur={saveChange}/>}
          <div className="text-sm text-slate-600">{tags}</div>
        </div>
      </div>
      <div className="flex space-x-2">
        <button onClick={toggleEdit} className="hidden lg:block"><Icons.Pencil/> </button>
        <button onClick={() => removeStationFavorite(stationuuid)}><Icons.Trash/></button>
      </div>
    </li>
  )
}