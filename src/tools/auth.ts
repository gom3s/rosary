import jwt_decode from 'jwt-decode'

import {AuthPayload, EAuthRoles} from '../context/AuthProvider'
import {defaultValue} from 'src/context/AuthProvider'

export const decodeJWT = (token?: string): AuthPayload =>
  token ? (jwt_decode(token) as AuthPayload) : defaultValue.payload

export const isUserAuthenticated = (payload: AuthPayload) => {
  if (Date.now() >= payload.exp * 1000) {
    return false
  }
  return payload.roles ? payload.roles.includes(EAuthRoles.ROLE_USER) : false
}
