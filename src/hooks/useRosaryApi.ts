import { IIntention } from 'src/components/IntentionCard/Interface';
import api from '../services/api';
import { useGetRequest } from './useGetRequest';
import { usePostRequest } from './usePostRequest';

const emptyIntention = {
  description: 'loading...',
  id: '',
  title: 'loading...',
  userId: ''
}

const emptyPrayer = {
  id: null,
  intention: null,
  prayer: null,
  type: 0,
} 

export const useIntentionList = () => useGetRequest<IIntention[]>(api, 'intentions', []);
export const useIntention = (id: string) => useGetRequest<IIntention>(api, `intentions/${id}`, emptyIntention);
export const usePrayRosaryRequest = () => usePostRequest(api, `pray_rosary_requests`, emptyPrayer)
