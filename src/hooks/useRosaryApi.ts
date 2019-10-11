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

export const useIntentionList = () => useGetRequest<IIntention[]>(api, 'intentions', []);
export const useIntention = (id: string) => useGetRequest<IIntention>(api, `intentions/${id}`, emptyIntention);
export const usePrayRosaryRequest = (intentionId: string) => usePostRequest(api, `test/${intentionId}`, {})
