import { Station } from "@/domain/type"
import { Icons } from "@/components/icons"
import { Input } from "@/components/ui/input"


type StationSearchWrapperProps = {
  children: React.ReactNode
  isOpen: boolean
}

export function StationSearchWrapper({ children, isOpen }: Readonly<StationSearchWrapperProps>) {
  return(
    <aside className={`
        flex flex-col p-4 pt-12
        h-full w-full z-10 
        search-transition ${isOpen ? 'search-open' : 'search-closed'}
        background-default
        lg:relative lg:w-1/5 lg:shadow-sm lg:shadow-slate-600
      `}
    >
      { children }
    </aside>
  )
}

type StationSearchContentProps = {
  children: React.ReactNode
  isOpen: boolean
  toggleSearch: () => void
}

export function StationSearchContent({ children, isOpen, toggleSearch }: Readonly<StationSearchContentProps>) {
  return(
    <div className='flex flex-col flex-1'>
      <button onClick={toggleSearch} className="absolute top-4 right-4 z-20">
        {isOpen && <Icons.More/>}
      </button>
      <div className="
        flex justify-center">
        <Input placeholder="Search here" className="
          w-2/3 bg-slate-400/50 shadow-sm shadow-slate-600
          "/>
      </div>
      <div className="flex-1 p-4">
        { children }
      </div>
    </div>
  )
}

type StationListWrapperProps = {
  children: React.ReactNode
}

export function StationListWrapper({ children }:  Readonly<StationListWrapperProps>) {
  return(
    <ol className="flex-1 space-y-2 rounded-lg p-2">
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
  const { name } = station
  return(
    <li className="
        flex justify-between p-2 rounded-lg
        bg-slate-400/50 shadow-sm shadow-slate-600
        hover:bg-slate-200
        ">
      <div className="flex space-x-4">
        <button className="hover:text-sky-500"><Icons.Play/></button>
        <div className="text-lg">{name}</div>
      </div>
      <button className="fill-neutral hover:text-sky-500"><Icons.Plus/></button>
    </li>
  )
}