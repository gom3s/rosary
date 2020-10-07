export const mockGetItem = jest.fn()
export const mockSetItem = jest.fn()
export const mockStorage = {
  getItem: mockGetItem,
  setItem: mockSetItem,
}
export const storage = mockStorage
