import { Filters } from "@/services/stationService"
import { useState, useCallback, ChangeEvent } from "react"


export function useHandleSearch() {
  const [ filters, setFilters ] = useState<Filters>({ page: 1, name: '', country: '', language: '' })

  const handlePreviousPageChange = useCallback(() => {
    if(filters.page <= 1) return
    setFilters({ ...filters, page: filters.page - 1 })
  }, 
  [filters])

  const handleNextPageChange = useCallback(() => {
    setFilters({ ...filters, page: filters.page + 1 })
  }, 
  [filters])

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, page: 1, name: e.target.value })
  }, [filters])

  const handleCountryChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, page: 1, country: e.target.value })
  }, [filters])

  const handleLanguageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, page: 1, language: e.target.value })
  }, [filters])

  
  const handlers = {
    handlePageChange: {
      previous: handlePreviousPageChange,
      next: handleNextPageChange
    },
    handleNameChange,
    handleCountryChange,
    handleLanguageChange
  }
  
  return { filters, handlers }
}