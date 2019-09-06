import axios from 'axios';
import { useEffect, useState } from 'react';

import { IIntention } from 'src/components/Intention/Interface';

const useRosaryApi = <T>(endpoint: string, initialData: T) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(
      `http://localhost:3001/${endpoint}`,
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const doFetch = (query: string) => setUrl(`http://localhost:3001/${endpoint}?${query}`);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
  
        try {
          const result = await axios(url);
  
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

  export const useInentionsApi = () => useRosaryApi<IIntention[]>('intentions', []);
  export default useRosaryApi;