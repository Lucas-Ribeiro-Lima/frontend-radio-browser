import { Station } from "@/domain/type";
import { Filters, RadioService } from "@/services/stationService";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "./use-toast";

export function useSearchStations(service: RadioService) { 
  const { toast } = useToast()
  const [ stations, setStations ] = useState<Station[]>([])
  const [ page, setPage ] = useState<number>(1)
  const [ country, setCountry ] = useState<string>("")
  const [ language, setLanguage ] = useState<string>("")
  const [ name, setName ] = useState<string>("")

  const loadData = useCallback(async () =>{ 
    try {
      const data =  await service.getStations({
        page: page-1,
        country,
        language,
        name
      })
      setStations(data)
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Error searching stations",
        variant: "destructive"
      })
    }
  }, [service, page, country, language, name, toast])

  const filterSearch = useCallback(({ page, country, language, name}: Filters) => {
    if(page) setPage(page)
    if(country) setCountry(country)
    if(language) setLanguage(language)
    if(name) setName(name)
  }, [])
  
  useEffect(() => {
    loadData()
  }, [loadData])


  return { stations, filterSearch }
}