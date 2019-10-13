import { AxiosResponse } from 'axios';
import { useState } from 'react';

export const useRequest = <T>(
  reqInstance: (url: string, data?: any) => Promise<AxiosResponse<T>> , 
  defaultEndpoint: string, 
  initialData: T
) => {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const doRequest = async (payload: {}, endpoint: string) => {
      setIsError(false);
      setIsLoading(true);
      endpoint = endpoint ? endpoint : defaultEndpoint;

      try {
        const result = await reqInstance(endpoint, payload);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
  
  
    return { state: { data, isLoading, isError }, doRequest };
  }
