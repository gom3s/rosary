import {useRequest} from '../useRequest'
import {IIntention} from 'src/components/IntentionCard/Interface'
import api from '../../services/api'

export const emptyIntention: Partial<IIntention> = {
  title: '',
  description: '',
}

export const usePostIntention = () =>
  useRequest(api.post, 'intentions', emptyIntention)
