import {PREFIX} from 'src/consts/prefix'
import {storage} from './storage'

export function getObject<T = string>(key: string, defaultValue: T) {
  const item = storage.getItem(PREFIX + key)
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
  return typeof value === 'object' || typeof value === 'string'
}
