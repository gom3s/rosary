import React, {createContext, useState} from 'react'
import {MysteryTypes} from 'src/consts/MysteryTypes'
import {IPrayRequest} from 'src/hooks/useRosaryApi/usePrayRosaryRequest'

type TActivePrayerData = IPrayRequest & {intentionId: string}

type TActivePrayer = {
  isPraying: boolean
  start?: Date
  data: TActivePrayerData
  setIspraying: (value: boolean) => void
  setActivePrayerData: (value: TActivePrayerData) => void
}
interface IUIContext {
  loginRedirect: string
  setLoginRedirect: (value: string) => void
  activePrayer: TActivePrayer
}

const emptyActivePrayer: TActivePrayer = {
  isPraying: false,
  data: {prayer: '', rosary: '', type: MysteryTypes.none, intentionId: ''},
  setIspraying: (value: boolean) => console.error(MISSUSE_MESSAGE),
  setActivePrayerData: (value: TActivePrayerData) =>
    console.error(MISSUSE_MESSAGE),
}
const MISSUSE_MESSAGE =
  'You attempt to use UIContext but forgot to wrap component in UIStateProvider!'
export const defaultValue = {
  loginRedirect: '/',
  setLoginRedirect: (value: string) => console.error(MISSUSE_MESSAGE),
  activePrayer: emptyActivePrayer,
}

export const UIContext = createContext<IUIContext>(defaultValue)

export const UIStateProvider: React.FunctionComponent = ({children}) => {
  const [loginRedirect, setLoginRedirect] = useState(defaultValue.loginRedirect)
  const [isPraying, setIspraying] = useState(false)
  const [prayerStart, setPrayerStart] = useState(new Date())
  const [activePrayerData, setActivePrayerData] = useState({
    prayer: '',
    rosary: '',
    intentionId: '',
    type: MysteryTypes.none,
  })

  const activePrayer: TActivePrayer = {
    isPraying,
    start: prayerStart,
    setIspraying,
    data: activePrayerData,
    setActivePrayerData,
  }

  const value = {
    loginRedirect,
    setLoginRedirect,
    activePrayer,
  }
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}
