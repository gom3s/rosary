import {useRequest} from '../useRequest'
import {IIntention} from 'src/components/IntentionCard/Interface'
import {authApi} from 'src/services/api'

export const emptyIntention: Partial<IIntention> = {
  title: '',
  description: '',
}

export const usePostIntention = (authToken: string) => {
  const {
    state: {isLoading, success},
    doRequest: postIntention,
  } = useRequest(authApi(authToken).post, 'intentions', emptyIntention)

  return {isLoading, success, postIntention}
}
