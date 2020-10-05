import dayjs, {Dayjs} from 'dayjs'
import React, {createContext, useState} from 'react'
import {MysteryTypes} from 'src/consts/MysteryTypes'
import {IPrayRequest} from 'src/hooks/useRosaryApi/usePrayRosaryRequest'
import {getObject, setObject} from 'src/tools/repository'
import {entities} from 'src/consts/entities'

type TActivePrayerData = IPrayRequest & {intentionId: string}

type TActivePrayer = {
  isPrayerActive: () => boolean
  start: Dayjs
  data: TActivePrayerData
  setIsPrayerActive: (value: boolean) => void
  setActivePrayerData: (value: TActivePrayerData) => void
}
interface IUIContext {
  loginRedirect: string
  setLoginRedirect: (value: string) => void
  activePrayer: TActivePrayer
}

const emptyPrayerData = {
  prayer: '',
  rosary: '',
  intentionId: '',
  type: MysteryTypes.none,
}

const emptyActivePrayer: TActivePrayer = {
  isPrayerActive: () => false,
  start: dayjs('1979-07-15'),
  data: emptyPrayerData,
  setIsPrayerActive: (value: boolean) => console.error(MISSUSE_MESSAGE),
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
  const [prayerStart, setPrayerStart] = useState(dayjs('1979-07-15'))
  const [activePrayerData, setActivePrayerData] = useState(
    getDefaultPrayerData(),
  )

  const setIsActive = (active: boolean) => {
    if (active) {
      setPrayerStart(dayjs())
    } else {
      setPrayerStart(dayjs('1979-07-15'))
    }
  }

  const isActive = () => {
    const seconds = dayjs().diff(prayerStart, 'second')
    return seconds <= 10 * 60
  }

  const activePrayer: TActivePrayer = {
    isPrayerActive: isActive,
    start: prayerStart,
    setIsPrayerActive: setIsActive,
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

const getDefaultPrayerData = () => getObject(entities.PRAYER, emptyPrayerData)
