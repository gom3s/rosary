import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'
import {makeStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import VerifiedUser from '@material-ui/icons/VerifiedUser'

import DrawerMenu from '../DrawerMenu'
import Link from '../Link'
import {AuthContext} from 'src/context/AuthProvider'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  box: {
    paddingBottom: theme.spacing(5),
  },
  login: {
    marginRight: theme.spacing(2),
  },
  icon: {
    float: 'right',
  },
  home: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}))

interface HideOnScrollProps {
  children: React.ReactElement
}
function HideOnScroll(props: HideOnScrollProps) {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  )
}

const Header = () => {
  const classes = useStyles()
  const {isLoggedIn} = React.useContext(AuthContext)

  const title = 'ORARE PRO ME'
  const topMenu = isLoggedIn ? (
    <VerifiedUser data-testid="logged-user" className={classes.icon} />
  ) : null
  return (
    <div className={classes.grow}>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <DrawerMenu></DrawerMenu>
            <Link to={`/`}>
              <Typography variant="h6" color="inherit" noWrap={true}>
                {title}
              </Typography>
            </Link>
            <Typography
              variant="subtitle2"
              className={classes.grow}
              noWrap={true}
            >
              <div className={classes.grow} />
              {topMenu}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box className={classes.box} />
    </div>
  )
}

export default Header
