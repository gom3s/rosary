import {IIntention} from 'src/components/IntentionCard/Interface'
import {emptyPrayer, Prayer} from 'src/types/Prayer'
import api from '../services/api'
import {useGetRequest} from './useGetRequest'
import {useRequest} from './useRequest'

const emptyIntention = {
  description: 'loading...',
  id: '',
  title: 'loading...',
  userId: '',
}

const emptyPrayRequest = {
  id: null,
  intention: null,
  prayer: null,
  type: 0,
}

export const useIntentionList = () =>
  useGetRequest<IIntention[]>(api, 'intentions', [])
export const useIntention = (id: string) =>
  useGetRequest<IIntention>(api, `intentions/${id}`, emptyIntention)
export const usePrayRosaryRequest = () =>
  useRequest(api.post, `pray_rosary_requests`, emptyPrayRequest)
export const useSavePrayer = () => useRequest(api.put, `prayers`, {})
export const useAuthTokenRequest = () =>
  useRequest(api.post, `authentication_token`, {})

export const usePrayer = (id: string | undefined) => {
  const url = id ? `prayers/${id}` : ''
  return useGetRequest<Prayer>(api, url, emptyPrayer)
}
