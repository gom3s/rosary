export const mockGetObject = jest.fn()
export const mockSetObject = jest.fn()
export const getObject = mockGetObject
export const setObject = mockSetObject

mockGetObject.mockImplementation((key, defaultObj: unknown) => defaultObj)
