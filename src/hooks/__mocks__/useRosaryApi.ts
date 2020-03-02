const doRequest = jest.fn()

export const useAuthenticationToken = () => ({
  state: {isLoading: false},
  doRequest,
})
