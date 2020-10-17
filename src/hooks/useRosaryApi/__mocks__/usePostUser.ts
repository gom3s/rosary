export const mockPostUserRequest = jest.fn()
export const usePostUserMock = () => ({
  isLoading: false,
  error: {isError: false},
  postUser: mockPostUserRequest,
})
export const usePostUser = usePostUserMock
