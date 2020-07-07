import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'
import {makeStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import DrawerMenu from '../DrawerMenu'
import Link from '../Link'
import {AuthContext} from 'src/context/AuthProvider'
import {TopMenu} from '../TopMenu'

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

export const Header = () => {
  const classes = useStyles()
  const {isAuthenticated} = React.useContext(AuthContext)

  const title = 'ORARE PRO ME'
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
            <div className={classes.grow} />
            <TopMenu isAuthenticated={isAuthenticated} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box className={classes.box} />
    </div>
  )
}

export default Header
