import {useRequest} from '../useRequest'
import {api} from '../../services/api'

export const emptyUser = {
  email: '',
  password: '',
}

export const usePostUser = () => {
  const {
    state: {isLoading, error, success},
    doRequest: postUser,
  } = useRequest(api.post, 'api_users', emptyUser)

  return {isLoading, error, success, postUser}
}
