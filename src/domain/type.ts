export type Station = {
  stationuuid: string
  name: string
  url: string
  codec: string
  country: string
  language: string
}

export type StationApiData = {
  changeuuid: string
  stationuuid: string
  serveruuid: string
  name: string
  url: string
  url_resolved: string
  homepage: string
  favicon: string
  tags: string[]
  country: string
  countrycode: string
  iso_3166_2: string
  state: string
  language: string
  languagecodes: string[]
  votes: number
  lastchangetime: number
  lastchangetime_iso8601: string
  codec: string
  bitrate: number
  hls: number
  lastcheckok: string
  lastchecktime: string
  lastchecktime_iso8601: string
  lastcheckoktime: string
  lastcheckoktime_iso8601: string
  lastlocalchecktime: string
  lastlocalchecktime_iso8601: string
  clicktimestamp: string
  clicktimestamp_iso8601: string
  clickcount: number
  clicktrend: number
  ssl_error: number
  geo_lat: number | null
  geo_long: number | null
  has_extended_info: boolean
}

export type Country = {
  name: string
}

export type CountrieApiData = {
  name: string,
  iso_3166_1: string,
  stationcount: number
}

export type Language = {
  name: string
}

export type LanguageApiData = {
  name: string,
  iso_639?: string,
  stationcount: number
}