import { useEffect, useState } from 'react';
import api from '../services/api';

import { IIntention } from 'src/components/IntentionCard/Interface';

const useRosaryApi = <T>(endpoint: string, initialData: T) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(
      `${endpoint}`,
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const doFetch = (query: string) => setUrl(`${endpoint}${query}`);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
  
        try {
          const result = await api(url);
  
          setData(result.data);
        } catch (error) {
          setIsError(true);
        }
  
        setIsLoading(false);
      };
  
      fetchData();
    }, [url]);
  
    return { state: { data, isLoading, isError }, doFetch };
  }

  export const useInentionsList = () => useRosaryApi<IIntention[]>('intentions', []);
  export const useInention = (id: string) => useRosaryApi<Partial<IIntention>>(`intentions/${id}`, {});
  export default useRosaryApi;