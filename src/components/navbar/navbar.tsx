import { Icons } from "../icons"

type NavBarWrapperProps = {
  children: React.ReactNode
}

export function NavBarWrapper({ children }: Readonly<NavBarWrapperProps>) {
  return(
    <div className="flex justify-end">
      {children}	
    </div>
  )
}


type NavBarContentProps = {
  searchOpen: boolean
  toggleSearch: () => void
}

export function NavBarContent({ searchOpen, toggleSearch }: Readonly<NavBarContentProps>) {
  return(
    <button onClick={toggleSearch} className="lg:hidden absolute top-4 right-4 z-20">
      {!searchOpen &&  <Icons.Search/>}
    </button>
  )
}