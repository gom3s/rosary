import React, {createContext, useState} from 'react'

interface IAuthContext {
  authToken: string
  setAuthToken: (authToken: string) => void
}

const defaultValue = {
  authToken: '',
  setAuthToken: (authToken: string) =>
    console.error(
      'You attempt to use AuthContext but forgot to wrap component in AuthProvider!',
    ),
}

export const AuthContext = createContext<IAuthContext>(defaultValue)

const AuthProvider: React.FunctionComponent = ({children}) => {
  const [authToken, setAuthToken] = useState('')
  const value = {
    authToken,
    setAuthToken,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
