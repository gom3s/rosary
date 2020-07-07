import React, {useContext} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import Link from '../Link'
import {AuthContext} from 'src/context/AuthProvider'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
}))

interface SideMenuProps {
  setOpen: (state: boolean) => void
}

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
      <List>{isAuthenticated ? logoutItem : loginItem}</List>
    </div>
  )
}
