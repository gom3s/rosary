import React from 'react'
import {Typography, makeStyles} from '@material-ui/core'
import VerifiedUser from '@material-ui/icons/VerifiedUser'

import Link from '../Link'

interface ITopMenuProps {
  isLoggedIn?: boolean
}

const useStyles = makeStyles(theme => ({
  icon: {
    float: 'right',
  },
}))

export const TopMenu: React.FunctionComponent<ITopMenuProps> = ({
  isLoggedIn,
}) => {
  const classes = useStyles()
  const userLink = isLoggedIn ? (
    <VerifiedUser data-testid="logged-user" className={classes.icon} />
  ) : (
    <Link to="/login">Login</Link>
  )
  return (
    <>
      <Typography variant="h6" color="inherit" noWrap={true}>
        {userLink}
      </Typography>
    </>
  )
}
