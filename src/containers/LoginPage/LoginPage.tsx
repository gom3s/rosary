import React, {useEffect, useState, useContext} from 'react'
import {Grid} from '@material-ui/core'

import LoginCard from 'src/components/LoginCard'
import {RegisterCard} from 'src/components/RegisterCard'
import {useAuthTokenRequest} from 'src/hooks/useRosaryApi'
import {AuthContext} from 'src/context/AuthProvider'
import {Redirect, useHistory, useLocation} from 'react-router-dom'

type LocationState = {
  from: Location
}

const LoginPage = () => {
  let history = useHistory()
  let location = useLocation<LocationState>()
  const {token, requestAuthToken, isLoading, error} = useAuthTokenRequest()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {email, password} = e.target['elements']
    if (!isLoading) {
      requestAuthToken({email: email.value, password: password.value})
    }
  }

  const [redirectOnLogin, setRedirectOnLogin] = useState('')
  const {setAuthToken} = useContext(AuthContext)

  useEffect(() => {
    if (token) {
      setAuthToken(token)
      const {from} = location.state || {from: null}
      if (from) {
        setRedirectOnLogin(from.pathname)
      } else history.goBack()
    }
  }, [setAuthToken, token, setRedirectOnLogin, location, history])

  if (redirectOnLogin) {
    return <Redirect to={redirectOnLogin} />
  }

  return (
    <>
      <Grid container={true} spacing={2}>
        <Grid item={true} key="login" xs={12} sm={6} md={12} lg={5}>
          <LoginCard handleSubmit={handleSubmit} error={error} />
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
