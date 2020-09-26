import React, {createContext, useState} from 'react'

type TActivePrayer =
  // | {isPraying: false; setIspraying: (value: boolean) => void}
  {
    isPraying: boolean
    prayerId: string
    start?: Date
    setIspraying: (value: boolean) => void
    setPrayerId: (value: string) => void
    setPrayerStart: (value: Date) => void
  }
interface IUIContext {
  loginRedirect: string
  setLoginRedirect: (value: string) => void
  activePrayer: TActivePrayer
}

const activePrayer: TActivePrayer = {
  isPraying: false,
  prayerId: '',
  setIspraying: (value: boolean) => console.error(MISSUSE_MESSAGE),
  setPrayerId: (value: string) => console.error(MISSUSE_MESSAGE),
  setPrayerStart: (value: Date) => console.error(MISSUSE_MESSAGE),
}
const MISSUSE_MESSAGE =
  'You attempt to use UIContext but forgot to wrap component in UIStateProvider!'
export const defaultValue = {
  loginRedirect: '/',
  setLoginRedirect: (value: string) => console.error(MISSUSE_MESSAGE),
  activePrayer,
}

export const UIContext = createContext<IUIContext>(defaultValue)

export const UIStateProvider: React.FunctionComponent = ({children}) => {
  const [loginRedirect, setLoginRedirect] = useState(defaultValue.loginRedirect)
  const [isPraying, setIspraying] = useState(false)
  const [prayerId, setPrayerId] = useState('')
  const [prayerStart, setPrayerStart] = useState(new Date())

  const activePrayer: TActivePrayer = {
    isPraying,
    prayerId,
    start: prayerStart,
    setIspraying,
    setPrayerStart,
    // data: {type, rosary, prayer},
    setPrayerId,
  }

  const value = {
    loginRedirect,
    setLoginRedirect,
    activePrayer,
  }
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}
