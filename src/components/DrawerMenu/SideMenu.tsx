import React, {useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import HomeIcon from '@material-ui/icons/Home'

import Link from '../Link'
import {AuthContext} from 'src/context/AuthProvider'
import {RosaryIcon} from '../Icons'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
}))

interface SideMenuProps {
  setOpen: (state: boolean) => void
}

// const navItems = [
//   {
//     key: 'login',
//     label: 'Zaloguj',
//     path: '/login',
//     icon: AccountCircleIcon,
//     allowedRoles: [IAuthRole.ROLE_UNAUTHORIZED, IAuthRole.ROLE_USER],
//   },
// ]
// TODO: #29 map navItems array to SideMenu ListItems

export const SideMenu: React.FC<SideMenuProps> = ({setOpen}) => {
  const classes = useStyles()
  const {isAuthenticated, logout} = useContext(AuthContext)
  const loginItem = (
    <Link to="/login">
      <ListItem button key={'login'}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary={'Zaloguj'} />
      </ListItem>
    </Link>
  )
  const logoutItem = (
    <ListItem button key={'logout'} onClick={logout}>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Wyloguj" />
    </ListItem>
  )
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={e => setOpen(false)}
      onKeyDown={e => setOpen(false)}
    >
      {' '}
      <List>
        <Link to="/">
          <ListItem button key={'home'} onClick={e => setOpen(false)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'ORARE PRO ME'} />
          </ListItem>
        </Link>
        <Link to="/add-intention">
          <ListItem button key={'add-intention'}>
            <RosaryIcon />
            <ListItemText primary={'Dodaj intencję'} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>{isAuthenticated ? logoutItem : loginItem}</List>
    </div>
  )
}
