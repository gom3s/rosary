import {storage} from './storage'

export const PREFIX = 'orareprome-'

export function getObject<T = unknown>(name: string, defaultValue: T) {
  const item = storage.getItem(PREFIX + name)
  // let value = item ? JSON.parse(item) : defaultValue
  let value: T | unknown

  if (item) {
    try {
      value = JSON.parse(item)
    } catch (error) {
      console.error(error)
    }
  }

  return isT<T>(value) ? value : defaultValue
}

function isT<T>(value: T | unknown): value is T {
  return typeof value === 'object'
}
