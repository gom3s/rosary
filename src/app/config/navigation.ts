import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'

import {ERoutes} from './routes'
import {RosaryIcon} from 'src/components/Icons'

export const Navigation = [
  {
    key: 'home',
    path: ERoutes.HOME,
    Icon: HomeIcon,
  },
  {
    key: 'add-intention',
    path: ERoutes.ADD_INTENTION,
    Icon: RosaryIcon,
  },
  {
    key: 'policy',
    path: ERoutes.POLICY,
    Icon: InfoIcon,
  },
  {
    key: 'login',
    path: ERoutes.LOGIN,
    Icon: HomeIcon,
  },
]
