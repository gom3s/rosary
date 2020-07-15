import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import {SideMenu} from './SideMenu'

const useStyles = makeStyles(theme => ({
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

export const DrawerMenu: React.FC = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

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
        <SideMenu setOpen={setOpen} />
      </SwipeableDrawer>
    </div>
  )
}

export default DrawerMenu
