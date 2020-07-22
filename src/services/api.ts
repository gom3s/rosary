import axios from 'axios'

const config = {
  baseURL: process.env.REACT_APP_ROSARY_API,
  headers: {accept: 'application/json'},
  timeout: 5000,
}

export const api = axios.create(config)

export const authApi = (authToken: string) =>
  axios.create({
    ...config,
    headers: {...config.headers, Authorization: `Bearer ${authToken}`},
  })

export default api
