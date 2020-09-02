import React from 'react'
import {AuthContext, IAuthRole} from '../context/AuthProvider'

interface AuthProviderStubProps {
  isAuthenticated: boolean
}
export const AuthProviderStub: React.FunctionComponent<
  AuthProviderStubProps
> = ({isAuthenticated, children}) => {
  const logout = () => {}
  const setAuthToken = () => {}
  const hasRole = (role: IAuthRole) => isAuthenticated

  const value = {
    payload: {
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
