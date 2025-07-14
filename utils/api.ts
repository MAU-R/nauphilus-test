import axios from 'axios'
import { useRuntimeConfig } from '#app'

export const api = axios.create({
  baseURL: useRuntimeConfig().public.NAUPHILUS_API_BASE,
  headers: {
    Authorization: `Bearer ${useRuntimeConfig().NAUPHILUS_API_KEY}`
  }
})
