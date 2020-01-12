import {AxiosInstance} from 'axios'
import {useEffect, useState} from 'react'

export const useGetRequest = <T>(
  api: AxiosInstance,
  endpoint: string,
  initialData: T,
) => {
  const [data, setData] = useState(initialData)
  const [url, setUrl] = useState(`${endpoint}`)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const doFetch = (query: string) => setUrl(`${endpoint}${query}`)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await api.get(url)

        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [url])

  return {state: {data, isLoading, isError}, doFetch}
}
