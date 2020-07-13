import React, {FC} from 'react'
import {Avatar, makeStyles} from '@material-ui/core'
import rosary from '../../rosary.svg'

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  rosaryIcon: {
    width: theme.spacing(3),
  },
}))

export const RosaryIcon: FC = () => {
  const classes = useStyles()

  return (
    <>
      <Avatar className={classes.avatar}>
        <img src={rosary} className={classes.rosaryIcon} alt="rosary-icon" />
      </Avatar>
    </>
  )
}
