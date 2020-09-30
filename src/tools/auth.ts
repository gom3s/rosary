import jwt_decode from 'jwt-decode'

import {IAuthPayload, IAuthRole} from '../context/AuthProvider'
import {defaultValue} from 'src/context/AuthProvider'

export const decodeJWT = (token?: string): IAuthPayload =>
  token ? (jwt_decode(token) as IAuthPayload) : defaultValue.payload

export const isUserAuthenticated = (payload: IAuthPayload) => {
  if (Date.now() >= payload.exp * 1000) {
    return false
  }
  return payload.roles ? payload.roles.includes(IAuthRole.ROLE_USER) : false
}
