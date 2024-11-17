'use client'

import { axiosHttpClient } from "./axios/axios";

export type HttpRequestConfs = {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  params?: Record<string, string | number>
}

export interface HttpClient {
  request: <T>(confs: HttpRequestConfs) => Promise<T>
}

export const httpClient = {
  axios: axiosHttpClient
}