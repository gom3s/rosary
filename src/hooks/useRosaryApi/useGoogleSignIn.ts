import api from '../../services/api'

export const useGoogleSignIn = () => {
  const exchangeToken = async (oAuthToken: string) => {
    const result = await api.get(`auth/id/${oAuthToken}`)
    const token = result.data.token

    return token
  }
  return {exchangeToken}
}
