import {useRequest} from '../useRequest'
import {api} from '../../services/api'

export const emptyUser = {
  email: '',
  password: '',
}

export const usePostUser = () => {
  const {
    state: {isLoading},
    doRequest: postUser,
  } = useRequest(api.post, 'api_users', emptyUser)

  return {isLoading, postUser}
}
