import * as React from 'react'
import {Grid, Card, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
}))

const LoginForm = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container={true} spacing={2}>
        <Grid item={true} key="login" xs={12} sm={6} md={6} lg={4}>
          <Card className={classes.card}>
            <Typography variant="h5" component="h2">
              Login Form <br />
              Login Form
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default LoginForm
