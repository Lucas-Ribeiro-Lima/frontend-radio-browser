import { HttpClient } from "@/adapters/http";
import { CountrieApiData, Country, Language, LanguageApiData, Station, StationApiData } from "@/domain/type";

export type Filters = {
  page: number
  name?: string
  country?: string
  language?: string
}

interface RadioServiceContract {
  getStations(filters: Filters): Promise<Station[]>
  getCountries(): Promise<Country[]>
  getLanguages(): Promise<Language[]>
}

export class RadioService implements RadioServiceContract {
  constructor(private readonly client: HttpClient) {}
  async getStations({page, country, language, name}: Filters): Promise<Station[]> {
    console.log(page)
    const apiResponse = await this.client.request<StationApiData[]>({
      url: "/stations/search",
      method: "GET",
      params: {
        limit: 10,
        offset: 10 * page,
        country: country || "",
        language: language || "",
        name: name || "",
        hideBroken: 1
      }
    })

    const stations: Station[] = apiResponse.map((station) => {
      return {
        stationuuid: station.stationuuid,
        name: station.name.substring(0, 25).concat("..."),
        url: station.url,
        codec: station.codec,
        language: station.language,
        country: station.country,
        tags: station.tags.split(",").slice(0, 3).join(" ")
      }
    })

    return stations
  }

  async getCountries(): Promise<Country[]> {
    const apiResponse = await this.client.request<CountrieApiData[]>({
      url: "/countries",
      method: "GET"
    })

    const countries: Country[] = apiResponse.map((country) => {
      return {
        name: country.name
      }
    })

    return countries
  }

  async getLanguages(): Promise<Language[]> {
    const apiResponse = await this.client.request<LanguageApiData[]>({
      url: "/languages",
      method: "GET"
    })    
    
    const languages: Language[] = apiResponse.map((language) => {
      return({
        name: language.name
      })
    })

    return languages
  }
}