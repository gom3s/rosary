import {IIntention} from 'src/components/IntentionCard/Interface'
import {emptyPrayer, IPrayer} from 'src/types/Prayer'
import api from 'src/services/api'
import {useGetRequest} from '../useGetRequest'
import {useRequest} from '../useRequest'

const emptyIntention = {
  description: 'loading...',
  id: '',
  title: 'loading...',
  userId: '',
}

export const useIntentionList = () => {
  const {state} = useGetRequest<IIntention[]>(api, 'intentions', [])
  const {data: intentions} = state

  return {intentions}
}
export const useIntention = (id: string) =>
  useGetRequest<IIntention>(api, `intentions/${id}`, emptyIntention)

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
  return useGetRequest<IPrayer>(api, url, emptyPrayer)
}
