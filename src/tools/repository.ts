import {storage} from './storage'

export const PREFIX = 'orareprome-'
export function getObject<T = unknown>(key: string, defaultValue: T) {
  const item = storage.getItem(PREFIX + key)
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

export function setObject(key: string, obj: object) {
  storage.setItem(PREFIX + key, JSON.stringify(obj))
}

function isT<T>(value: T | unknown): value is T {
  return typeof value === 'object'
}
