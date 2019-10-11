import { AxiosInstance } from 'axios';
import { useState } from 'react';

export const usePostRequest = <T>(api: AxiosInstance, endpoint: string, initialData: T) => {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const doPost = async (payload: {}) => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await api.post(endpoint, payload);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
  
  
    return { state: { data, isLoading, isError }, doPost };
  }
