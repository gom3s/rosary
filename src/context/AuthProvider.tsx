import React, {createContext, useState, useEffect} from 'react'
import {decodeJWT, isUserLoggedIn} from '../tools/auth'

export interface IAuthContext {
  isLoggedIn: boolean
  payload: IAuthPayload
  setAuthToken: (authToken: string) => void
}

export interface IAuthPayload {
  id: string
  username: string
  roles: IAuthRole[]
}

export enum IAuthRole {
  ROLE_UNAUTHORIZED = 'ROLE_UNAUTHORIZED',
  ROLE_USER = 'ROLE_USER',
  ROLE_ADMIN = 'ROLE_ADMIN',
}

const defaultValue = {
  isLoggedIn: false,
  payload: {
    id: '',
    username: '',
    roles: [IAuthRole.ROLE_UNAUTHORIZED],
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
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const payload = authToken ? decodeJWT(authToken) : defaultValue.payload
    authToken && setPayload(payload)
    authToken && setIsLoggedIn(isUserLoggedIn(payload))
  }, [setPayload, setIsLoggedIn, authToken])

  const value = {
    payload,
    isLoggedIn,
    setAuthToken,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
