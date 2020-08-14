import axios from 'axios'

const config = {
  baseURL: process.env.REACT_APP_ROSARY_API,
  headers: {accept: 'application/json'},
  timeout: 5000,
}

const handleRequestError = (error: any) => {
  if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.error(`ERROR | The request was made but no response was received`)
    return Promise.reject('The request was made but no response was received')
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(`ERROR | error.message: ${error.message}`)
    return Promise.reject(error.message)
  }
}

const handleResponseError = (error: any) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(
      `ERROR |--> status: ${error.response.status} | error.response.data: ${error.response.data}`,
    )
    return Promise.reject(
      `Server responded with status code: ${error.response.status}`,
    )
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(`ERROR | error.message: ${error.message}`)
    return Promise.reject(error.message)
  }
}

export const api = axios.create(config)

api.interceptors.request.use(config => config, handleRequestError)
api.interceptors.response.use(response => response, handleResponseError)

export const authApi = (authToken: string) => {
  const instance = axios.create({
    ...config,
    headers: {...config.headers, Authorization: `Bearer ${authToken}`},
  })
  instance.interceptors.request.use(config => config, handleRequestError)
  instance.interceptors.response.use(response => response, handleResponseError)

  return instance
}

export default api
