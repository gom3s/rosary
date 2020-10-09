export const mockRequest = jest.fn()
export const useAuthTokenRequestMock = () => ({
  state: {isLoading: false, data: {token: ''}},
  requestAuthToken: mockRequest,
  error: {isError: false},
})
export const useAuthTokenRequest = useAuthTokenRequestMock
