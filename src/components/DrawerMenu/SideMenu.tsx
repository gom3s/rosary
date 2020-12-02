import React, {useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import Link from '../Link'
import {AuthContext} from 'src/context/AuthProvider'
import {RosaryIcon} from '../Icons'
import {navigation, navLabels} from 'src/app/config/navigation'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
}))

interface SideMenuProps {
  setOpen: (state: boolean) => void
}

// TODO: #29 map navItems array to SideMenu ListItems

export const SideMenu: React.FC<SideMenuProps> = ({setOpen}) => {
  const classes = useStyles()
  const {isAuthenticated, logout, hasRole} = useContext(AuthContext)
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

  const menuItems = navigation
    .filter((n) => n.roles.some(hasRole))
    .map((n) => (
      <div key={n.key}>
        <Link to={n.path}>
          <ListItem button>
            <ListItemIcon>{getIcon(n.icon)}</ListItemIcon>
            <ListItemText primary={navLabels['pl'][n.key]} />
          </ListItem>
        </Link>
      </div>
    ))

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={(e) => setOpen(false)}
      onKeyDown={(e) => setOpen(false)}
    >
      {' '}
      <List>{menuItems}</List>
      <Divider />
      <List>{isAuthenticated ? logoutItem : loginItem}</List>
    </div>
  )
}

const getIcon = (icon: string) => {
  switch (icon) {
    case 'HomeIcon':
      return <HomeIcon />
    case 'RosaryIcon':
      return <RosaryIcon />
    case 'AccountCircleIcon':
      return <AccountCircleIcon />
    case 'InfoIcon':
      return <InfoIcon />
    default:
      return <HomeIcon />
  }
}
