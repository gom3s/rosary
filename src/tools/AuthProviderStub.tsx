import React from 'react'
import {AuthContext, EAuthRoles} from '../context/AuthProvider'

interface AuthProviderStubProps {
  isAuthenticated: boolean
}
export const AuthProviderStub: React.FunctionComponent<AuthProviderStubProps> = ({
  isAuthenticated,
  children,
}) => {
  const logout = () => {}
  const setAuthToken = () => {}
  const hasRole = (role: EAuthRoles) => isAuthenticated

  const value = {
    payload: {
      exp: 0,
      id: '',
      username: '',
      roles: [],
    },
    isAuthenticated,
    hasRole,
    setAuthToken,
    logout,
    authToken: '',
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
