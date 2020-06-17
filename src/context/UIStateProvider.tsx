import React, {createContext, useState} from 'react'

interface IUIContext {
  loginRedirect: string
  setLoginRedirect: (value: string) => void
}

const MISSUSE_MESSAGE =
  'You attempt to use UIContext but forgot to wrap component in UIStateProvider!'
export const defaultValue = {
  loginRedirect: '/',
  setLoginRedirect: (value: string) => console.error(MISSUSE_MESSAGE),
}

export const UIContext = createContext<IUIContext>(defaultValue)

export const UIStateProvider: React.FunctionComponent = ({children}) => {
  const [loginRedirect, setLoginRedirect] = useState(defaultValue.loginRedirect)

  const value = {
    loginRedirect,
    setLoginRedirect,
  }
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}
