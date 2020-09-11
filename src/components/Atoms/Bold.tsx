import React, {FC} from 'react'
import {Box} from '@material-ui/core'

export const Bold: FC = ({children}) => (
  <Box component="span" color="primary.main" fontWeight="bold">
    {children}
  </Box>
)
