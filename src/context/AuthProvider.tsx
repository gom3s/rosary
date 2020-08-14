import React, {createContext, useState, useEffect} from 'react'
import {decodeJWT, isUserAuthenticated} from '../tools/auth'

export interface IAuthContext {
  isAuthenticated: boolean
  authToken: string
  payload: IAuthPayload
  setAuthToken: (authToken: string) => void
  logout: () => void
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

export const defaultValue = {
  isAuthenticated: false,
  authToken: '',
  payload: {
    id: '',
    username: '',
    roles: [IAuthRole.ROLE_UNAUTHORIZED],
  },
  setAuthToken: (authToken: string) =>
    console.error(
      'You attempt to use AuthContext but forgot to wrap component in AuthProvider!',
    ),
  logout: () =>
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
    const payload = decodeJWT(authToken)
    localStorage.setItem('authToken', authToken)
    localStorage.setItem('payload', JSON.stringify(payload))
    authToken && setPayload(payload)
    authToken && setAuthenticated(isUserAuthenticated(payload))
  }, [setPayload, setAuthenticated, authToken])

  const logout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('payload')
    setAuthToken('')
    setPayload(initialPayload)
    setAuthenticated(false)
  }

  const hasRole = (role: IAuthRole) => payload.roles.includes(role)

  const value = {
    payload,
    isAuthenticated,
    hasRole,
    setAuthToken,
    logout,
    authToken,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
