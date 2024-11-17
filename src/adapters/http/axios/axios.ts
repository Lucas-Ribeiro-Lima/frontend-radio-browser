import { loggers } from '@/adapters/logger'
import Axios, { AxiosError } from 'axios'
import { Logger } from 'logger'
import { HttpClient, HttpRequestConfs } from '..'

const axiosDefault = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
})

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly client = axiosDefault) {}

  async request<T>({ url, method, params}: HttpRequestConfs) {
    try {
      const {  data } = await this.client.request<T>({
        url,
        method,
        params
      }) 
      return data  
    } 
    catch (error) {
      const __error = error as AxiosError
      throw new Error(__error.message)
    }
  }
}

export const axiosHttpClient = new AxiosHttpClient()