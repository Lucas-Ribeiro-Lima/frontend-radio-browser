'use client'

import { createContext, useCallback, useState } from 'react'

type SearchbarContextType = {
  isOpen: boolean
  toggle: () => void
}

export const SearchBarContext = createContext<SearchbarContextType>({ isOpen: false, toggle: () => {} })

export function SearchBarProvider({ children }: Readonly<{ children: React.ReactNode}>) {
  const [ searchOpen, setSearchOpen ] = useState(false)

  const toggleSearch = useCallback(() => {
    setSearchOpen((prev) => !prev)
  }, [setSearchOpen])

  return(
    <SearchBarContext.Provider value={{ isOpen: searchOpen, toggle: toggleSearch }}>
      { children }
    </SearchBarContext.Provider>
  )
}