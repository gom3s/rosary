import React, {createContext, useState, useEffect} from 'react'
import decodeJWT from '../tools/decodeJWT'

export interface IAuthContext {
  payload: IAuthPayload
  authToken: string
  setAuthToken: (authToken: string) => void
}

export interface IAuthPayload {
  id: string
  email: string
  role: IAuthRole[]
}

export enum IAuthRole {
  ROLE_UNAUTHORIZED = 'ROLE_UNAUTHORIZED',
  ROLE_USER = 'ROLE_USER',
  ROLE_ADMIN = 'ROLE_ADMIN',
}

const defaultValue = {
  authToken: '',
  payload: {
    id: '',
    email: '',
    role: [IAuthRole.ROLE_UNAUTHORIZED],
  },
  setAuthToken: (authToken: string) =>
    console.error(
      'You attempt to use AuthContext but forgot to wrap component in AuthProvider!',
    ),
}

export const AuthContext = createContext<IAuthContext>(defaultValue)

const AuthProvider: React.FunctionComponent = ({children}) => {
  const [authToken, setAuthToken] = useState('')
  const [payload, setPayload] = useState<IAuthPayload>(defaultValue.payload)

  useEffect(() => {
    authToken && setPayload(decodeJWT(authToken))
  }, [setPayload, authToken])

  const value = {
    payload,
    authToken,
    setAuthToken,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
