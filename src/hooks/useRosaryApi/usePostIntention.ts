import {useRequest} from '../useRequest'
import {IIntention} from 'src/components/IntentionCard/Interface'
import api from '../../services/api'

export const emptyIntention: Partial<IIntention> = {
  title: '',
  description: '',
}

export const usePostIntention = () => {
  const {
    state: {isLoading},
    doRequest: postIntention,
  } = useRequest(api.post, 'intentions', emptyIntention)

  return {isLoading, postIntention}
}
