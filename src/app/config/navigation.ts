import {ERoutes} from './routes'
import {EAuthRoles} from 'src/context/AuthProvider'

const roles = [EAuthRoles.ROLE_USER, EAuthRoles.ROLE_UNAUTHORIZED]

export const navigation = [
  {
    key: 'nav.home',
    path: ERoutes.HOME,
    icon: 'HomeIcon',
    roles,
  },
  {
    key: 'nav.add-intention',
    path: ERoutes.ADD_INTENTION,
    icon: 'RosaryIcon',
    roles: [EAuthRoles.ROLE_USER],
  },
  {
    key: 'nav.policy',
    path: ERoutes.POLICY,
    icon: 'InfoIcon',
    roles,
  },
  {
    key: 'nav.login',
    path: ERoutes.LOGIN,
    icon: 'AccountCircleIcon',
    roles: [EAuthRoles.ROLE_UNAUTHORIZED],
  },
  {
    key: 'nav.logout',
    path: ERoutes.LOGIN,
    icon: 'AccountCircleIcon',
    roles: [EAuthRoles.ROLE_USER],
  },
]

export const navLabels = {
  pl: {
    'nav.home': 'ORARE PRO ME',
    'nav.add-intention': 'Dodaj intencję',
    'nav.policy': 'O projekcie',
    'nav.login': 'Zaloguj',
  },
}
