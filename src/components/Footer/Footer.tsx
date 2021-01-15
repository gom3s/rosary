import * as React from 'react'

import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import AddIcon from '@material-ui/icons/Add'
import {Link} from 'react-router-dom'
import {ERoutes} from 'src/app/config/routes'

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
})

const Footer = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <BottomNavigationAction icon={<HomeIcon />} component={Link} to="/" />
      <BottomNavigationAction
        icon={<AddIcon />}
        component={Link}
        to={ERoutes.ADD_INTENTION}
      />
      <BottomNavigationAction
        icon={<InfoIcon />}
        component={Link}
        to={ERoutes.ABOUT}
      />
    </BottomNavigation>
  )
}

export default Footer
