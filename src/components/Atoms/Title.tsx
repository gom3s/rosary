import React, {FC} from 'react'
import {Typography} from '@material-ui/core'

export const Title: FC = ({children}) => (
  <Typography gutterBottom={true} variant="h5" component="h2">
    {children}
  </Typography>
)
