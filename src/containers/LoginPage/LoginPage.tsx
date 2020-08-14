import * as React from 'react'
import {Grid} from '@material-ui/core'

import LoginCard from 'src/components/LoginCard'
import {RegisterCard} from 'src/components/RegisterCard'

const LoginPage = () => {
  return (
    <>
      <Grid container={true} spacing={2}>
        <Grid item={true} key="login" xs={12} sm={6} md={12} lg={5}>
          <LoginCard />
        </Grid>
        <Grid
          item={true}
          key="placeholder"
          xs="auto"
          sm={1}
          md={1}
          lg={2}
        ></Grid>
        <Grid item={true} key="register" xs={12} sm={6} md={12} lg={5}>
          <RegisterCard />
        </Grid>
      </Grid>
    </>
  )
}

export default LoginPage
