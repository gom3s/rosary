import {AxiosResponse} from 'axios'
import {useState} from 'react'
import {ApiError, isApiError} from 'src/services/api'

export const useRequest = <T>(
  reqInstance: (url: string, data?: any) => Promise<AxiosResponse<T>>,
  defaultEndpoint: string,
  initialData: T,
) => {
  const emptyError: ApiError = {isError: false}
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  // TODO #16: handle api error codes
  const [error, setError] = useState(emptyError as ApiError)
  const doRequest = async (payload: {}, endpoint?: string) => {
    setError(emptyError)
    setIsLoading(true)
    setSuccess(false)
    endpoint = endpoint ? endpoint : defaultEndpoint

    try {
      const result = await reqInstance(endpoint, payload)
      setData(result.data)
      setSuccess(true)
    } catch (error) {
      if (isApiError(error)) {
        setError(error)
      }
    }

    setIsLoading(false)
  }

  return {state: {data, isLoading, error, success}, doRequest}
}
