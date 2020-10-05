import {mockGetItem} from '../storage'
import {getObject, PREFIX} from '../repository'

jest.mock('../storage')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('repository', () => {
  it('getObject should use storage with prefix', () => {
    getObject('test-name', {})

    expect(mockGetItem).toBeCalled()
    expect(mockGetItem).toBeCalledWith(PREFIX + 'test-name')
  })

  it('should return object serialized in storage', () => {
    const obj = {
      foo: 'test',
      bar: 123,
    }
    mockGetItem.mockImplementation(() => JSON.stringify(obj))

    const returnedObject = getObject('test-name', {})
    expect(returnedObject).toEqual(obj)
  })

  it('should return default value', () => {
    const obj = {
      foo: 'test default value',
      bar: 999,
    }
    mockGetItem.mockImplementation(() => null)
    const returnedObject = getObject('test-name', obj)
    expect(returnedObject).toEqual(obj)
  })
})
