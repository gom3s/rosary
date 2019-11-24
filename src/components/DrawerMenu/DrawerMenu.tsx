import * as React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'

import Link from '../Link'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  drawerIcon: {
    marginRight: theme.spacing(2),
  },
}))

const DrawerMenu = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={e => setOpen(false)}
      onKeyDown={e => setOpen(false)}
    >
      <List>
        <Link to="/">
          <ListItem button key={'login'}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={'Login...'} />
          </ListItem>
        </Link>
      </List>
    </div>
  )

  return (
    <div>
      <IconButton onClick={e => setOpen(true)}>
        <MenuIcon className={classes.icon} />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={e => setOpen(false)}
        onOpen={e => setOpen(true)}
      >
        <List>
          <Link to="/">
            <ListItem button key={'home'} onClick={e => setOpen(false)}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'ORARE PRO ME'} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        {sideList()}
      </SwipeableDrawer>
    </div>
  )
}

export default DrawerMenu
