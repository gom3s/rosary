import { IIntention } from 'src/components/IntentionCard/Interface';
import api from '../services/api';
import { useGetRequest } from './useGetRequest';
import { useRequest } from './useRequest';

const emptyIntention = {
  description: 'loading...',
  id: '',
  title: 'loading...',
  userId: ''
}

const emptyPrayRequest = {
  id: null,
  intention: null,
  prayer: null,
  type: 0,
} 

export const useIntentionList = () => useGetRequest<IIntention[]>(api, 'intentions', []);
export const useIntention = (id: string) => useGetRequest<IIntention>(api, `intentions/${id}`, emptyIntention);
export const usePrayRosaryRequest = () => useRequest(api.post, `pray_rosary_requests`, emptyPrayRequest)
export const useSavePrayer = () => useRequest(api.put, `prayers`, {})
