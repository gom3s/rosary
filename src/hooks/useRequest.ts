import {AxiosResponse} from 'axios'
import {useState} from 'react'
// import {handleErrors} from 'src/services/api'

export const useRequest = <T>(
  reqInstance: (url: string, data?: any) => Promise<AxiosResponse<T>>,
  defaultEndpoint: string,
  initialData: T,
) => {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const doRequest = async (payload: {}, endpoint?: string) => {
    setError('')
    setIsLoading(true)
    endpoint = endpoint ? endpoint : defaultEndpoint

    try {
      const result = await reqInstance(endpoint, payload)
      setData(result.data)
    } catch (error) {
      setError(error)
    }

    setIsLoading(false)
  }

  return {state: {data, isLoading, error}, doRequest}
}
