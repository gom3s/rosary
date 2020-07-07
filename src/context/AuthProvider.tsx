import React, {createContext, useState, useEffect} from 'react'
import {decodeJWT, isUserAuthenticated} from '../tools/auth'

export interface IAuthContext {
  isAuthenticated: boolean
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
  isAuthenticated: false,
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
  const savedPayload = localStorage.getItem('payload')
  const initialPayload = savedPayload
    ? JSON.parse(savedPayload)
    : defaultValue.payload
  const [authToken, setAuthToken] = useState(
    localStorage.getItem('authToken') || '',
  )
  const [payload, setPayload] = useState<IAuthPayload>(initialPayload)
  const [isAuthenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const payload = authToken ? decodeJWT(authToken) : initialPayload
    localStorage.setItem('authToken', authToken)
    localStorage.setItem('payload', JSON.stringify(payload))
    authToken && setPayload(payload)
    authToken && setAuthenticated(isUserAuthenticated(payload))
  }, [setPayload, setAuthenticated, authToken])

  const value = {
    payload,
    isAuthenticated,
    setAuthToken,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
