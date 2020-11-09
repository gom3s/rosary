import React, {FC} from 'react'
import {Link as MUILink} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {PrivacyPolicy} from 'src/components/PrivacyPolicy'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      <MUILink color="inherit" href="https://twitter.com/gmotyl">
        {' @gmotyl'}
      </MUILink>{' '}
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
          <a
            href="https://github.com/gom3s/rosary"
            target="_blank"
            rel="noreferrer noopener"
          >
            Projekt Open Source!
          </a>{' '}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>

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
      <PrivacyPolicy />
    </React.Fragment>
  )
}
