import {ERoutes} from './routes'
import {EAuthRoles} from 'src/context/AuthProvider'

const roles = [EAuthRoles.ROLE_USER, EAuthRoles.ROLE_UNAUTHORIZED]

export interface NavLinkItem {
  key: string
  path: ERoutes
  icon: string
  roles: EAuthRoles[]
}
export interface NavActionItem {
  key: string
  action: () => void
  icon: string
  roles: EAuthRoles[]
}

type NavItem = NavLinkItem | NavActionItem

export const isNavLinkItem = (item: NavItem): item is NavLinkItem => {
  return typeof (item as NavLinkItem).path !== 'undefined'
}

interface NavProps {
  logout: () => void
}

export const navigationFactory = ({logout}: NavProps) => [
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
    key: 'nav.logout',
    action: logout,
    icon: 'AccountCircleIcon',
    roles: [EAuthRoles.ROLE_USER],
  },
  {
    key: 'nav.login',
    path: ERoutes.LOGIN,
    icon: 'AccountCircleIcon',
    roles: [EAuthRoles.ROLE_UNAUTHORIZED],
  },
]

export const navLabels = {
  pl: {
    'nav.home': 'ORARE PRO ME',
    'nav.add-intention': 'Dodaj intencję',
    'nav.policy': 'O projekcie',
    'nav.login': 'Zaloguj',
    'nav.logout': 'Wyloguj',
  },
}
