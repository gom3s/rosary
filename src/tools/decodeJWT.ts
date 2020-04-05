import jwt_decode from 'jwt-decode'

import {IAuthPayload} from '../context/AuthProvider'

const decodeJWT = (token: string): IAuthPayload =>
  jwt_decode(token) as IAuthPayload

export default decodeJWT
