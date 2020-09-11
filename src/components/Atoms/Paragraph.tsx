import React, {FC} from 'react'
import {makeStyles, Typography} from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  cardParagraph: {
    paddingBottom: theme.spacing(2),
  },
}))

export const Paragraph: FC = ({children}) => {
  const classes = useStyles()

  return <Typography className={classes.cardParagraph}>{children}</Typography>
}
