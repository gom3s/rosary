import * as React from 'react'
import {Grid} from '@material-ui/core'

import LoginCard from '../../components/LoginCard'

const LoginPage = () => {
  return (
    <>
      <Grid container={true} spacing={2}>
        <Grid item={true} key="login" xs={12} sm={6} md={12} lg={5}>
          <LoginCard />
        </Grid>
        <Grid item={true} key="login" xs={12} sm={6} md={12} lg={7}>
          {/* Register */}
        </Grid>
      </Grid>
    </>
  )
}

export default LoginPage
