import jwt_decode from 'jwt-decode'

import {IAuthPayload, IAuthRole} from '../context/AuthProvider'

export const decodeJWT = (token: string): IAuthPayload =>
  jwt_decode(token) as IAuthPayload

export const isUserAuthenticated = (payload: IAuthPayload) => {
  return payload.roles ? payload.roles.includes(IAuthRole.ROLE_USER) : false
}
