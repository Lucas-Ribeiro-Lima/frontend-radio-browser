import { Icons } from "@/components/icons"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Station } from "@/domain/type"
import { useHandleSearch } from "@/hooks/useHandleSearch"
import { Filters } from "@/services/stationService"
import { useCallback, useEffect } from "react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "../ui/pagination"


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
        lg:relative lg:search-open lg:w-1/5 lg:shadow-sm lg:shadow-slate-600
        overflow-hidden
      `}
    >
      { children }
    </aside>
  )
}

type StationSearchContentProps = {
  children: React.ReactNode
  toggleSearch: () => void
  filterSearch: (filters: Filters) => void
}

export function StationSearchContent({ children, toggleSearch, filterSearch }: Readonly<StationSearchContentProps>) {
  const { filters, handlers: { handleCountryChange, handleLanguageChange, handleNameChange }} = useHandleSearch()

  useEffect(() => {
    filterSearch({ ...filters })
  }, [filters, filterSearch])
  
  return(
    <div className='flex flex-col flex-1 '>
      <button onClick={toggleSearch} className="absolute top-4 right-4 z-20">
        <Icons.More/>
      </button>
      <div >
        <Collapsible className="flex flex-col items-center space-x-1 space-y-2">
          <Input
            onChange={handleNameChange}
            placeholder="Search for name here" 
            className="w-2/3 bg-slate-400/50 shadow-sm shadow-slate-600"/>
          <CollapsibleTrigger className="flex space-x-2 items-center text-sm text-slate-500 ">expand search<Icons.ChevronDown/></CollapsibleTrigger>
          <CollapsibleContent className="flex items-center w-full flex-col space-y-2">
          <Input
            onChange={handleCountryChange}
            placeholder="Search for country here" 
            className="w-2/3 bg-slate-400/50 shadow-sm shadow-slate-600"/>
          <Input 
            onChange={handleLanguageChange}
            placeholder="Search for language here" 
            className="w-2/3 bg-slate-400/50 shadow-sm shadow-slate-600"/>
          </CollapsibleContent>
        </Collapsible> 
      </div>
      <div className="flex flex-col flex-1 p-4">
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
  addStationFavorite: (station: Station) => void
  onFavorite: (uuid: string) => boolean
}

export function StationListItem({ station, addStationFavorite, onFavorite }: Readonly<StationListItemProps>) {
  const { name } = station

  const onClickAdd = useCallback(() => {
    addStationFavorite(station)
  }, [station, addStationFavorite])

  const isFavorite = onFavorite(station.stationuuid)

  return(
    <li className="
        flex justify-between p-2 rounded-lg
        bg-slate-400/50 shadow-sm shadow-slate-600
        hover:bg-slate-200
        ">
      <div className="flex space-x-2">
        <div className="text-sm">{name}</div>
      </div>
      {isFavorite && <Icons.Check/>}
      {!isFavorite && <button onClick={onClickAdd} className="fill-neutral hover:text-sky-500"><Icons.Plus/></button>}
    </li>
  )
}

type StationPaginationProps = {
  filterSearch: (filters: Filters) => void
}

export function StationPagination({ filterSearch }: StationPaginationProps) {
  const {filters ,handlers: { handlePageChange }} = useHandleSearch()


  useEffect(() => {
    filterSearch({ page: filters.page })
  }, [ filters, filterSearch ]) 

  return(
    <Pagination>
      <PaginationContent>
        <button  onClick={handlePageChange.previous}>
          <PaginationItem >
            <PaginationPrevious/>
          </PaginationItem>
        </button>
        <PaginationItem>
          <span>{filters.page}</span>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <button onClick={handlePageChange.next}>
          <PaginationItem >
            <PaginationNext/>
          </PaginationItem>
        </button>
      </PaginationContent>
    </Pagination>
  )
}