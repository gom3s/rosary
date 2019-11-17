import * as React from 'react'

import {Link} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'
import {makeStyles} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import HomeIcon from '@material-ui/icons/Home'
import {Link as RouterLink} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  box: {
    paddingBottom: theme.spacing(5),
  },
  icon: {
    marginRight: theme.spacing(2),
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

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Link component={RouterLink} to={`/`} color="inherit">
              <HomeIcon className={classes.icon} />
            </Link>
            <Typography variant="h6" color="inherit" noWrap={true}>
              ORARE PRO ME
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box className={classes.box} />
    </React.Fragment>
  )
}

export default Header
