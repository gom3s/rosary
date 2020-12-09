import React from 'react'
import {AuthContext, EAuthRoles} from '../context/AuthProvider'

interface AuthProviderStubProps {
  isAuthenticated: boolean
  roles?: EAuthRoles[]
}
export const AuthProviderStub: React.FunctionComponent<AuthProviderStubProps> = ({
  isAuthenticated,
  roles,
  children,
}) => {
  const logout = () => {}
  const setAuthToken = () => {}
  const userRoles = isAuthenticated
    ? roles ?? [EAuthRoles.ROLE_USER]
    : [EAuthRoles.ROLE_UNAUTHORIZED]

  const hasRole = (role: EAuthRoles) => userRoles.includes(role)

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
