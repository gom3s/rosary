import i18n from 'i18next'
import en from './translation/en.json'
import pl from './translation/pl.json'
import {initReactI18next} from 'react-i18next'

export const i18nSetup = () => {
  // const lng = getLocale()
  const resources = {
    en: {
      translation: en,
    },
    pl: {
      translation: pl,
    },
  } as const

  i18n.use(initReactI18next).init({
    lng: 'pl',
    fallbackLng: 'en',
    resources,
  })
}
