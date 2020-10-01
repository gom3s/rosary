import React, {FC} from 'react'
import Link from '@material-ui/core/Link'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      <Link color="inherit" href="https://twitter.com/gmotyl">
        {' @gmotyl'}
      </Link>{' '}
    </Typography>
  )
}
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(6),
  },
}))

export const About: FC = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom={true}>
          <a href="https://github.com/gom3s/rosary" target="_blank">
            Projekt Open Source!
          </a>{' '}
          You are wolcome to contribute.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          GPLv3
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  )
}
