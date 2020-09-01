import {IIntention} from 'src/components/IntentionCard/Interface'
import {emptyPrayer, Prayer} from 'src/types/Prayer'
import api from '../../services/api'
import {useGetRequest} from '../useGetRequest'
import {useRequest} from '../useRequest'
import {MysteryTypes} from 'src/consts/MysteryTypes'

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
  type: MysteryTypes.none,
}

export const useIntentionList = () => {
  const {state} = useGetRequest<IIntention[]>(api, 'intentions', [])
  const {data: intentions} = state

  return {intentions}
}
export const useIntention = (id: string) =>
  useGetRequest<IIntention>(api, `intentions/${id}`, emptyIntention)

export const useDeleteIntention = () => {
  const {
    doRequest,
    state: {isLoading},
  } = useRequest(api.delete, `intentions`, {})
  const deleteIntention = (id: string) => doRequest({}, `intentions/${id}`)

  return {deleteIntention, isLoading}
}

export const usePrayRosaryRequest = () =>
  useRequest(api.post, `pray_rosary_requests`, emptyPrayRequest)
export const useSavePrayer = () => useRequest(api.put, `prayers`, {})
export const useAuthTokenRequest = () => {
  const {state, doRequest: requestAuthToken} = useRequest(
    api.post,
    `authentication_token`,
    {},
  )
  const token = state.data.token

  return {
    token,
    requestAuthToken,
    isLoading: state.isLoading,
    error: state.error,
  }
}

export const usePrayer = (id: string | undefined) => {
  const url = id ? `prayers/${id}` : ''
  return useGetRequest<Prayer>(api, url, emptyPrayer)
}
