import * as React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Link from '../Link'

const useStyles = makeStyles(theme => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}))

export const Hero = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <main>
        <span className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom={true}
            >
              Pomódl się za mnie
            </Typography>
            <Box fontStyle="italic" color="textPrimary">
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph={true}
              >
                "O cokolwiek przez różaniec prosić będziesz - otrzymasz."
              </Typography>
            </Box>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph={true}
            >
              Nasza internetowa wspólnota modli się w Twojej intencji.
            </Typography>
            <span className={classes.heroButtons}>
              <Grid container={true} spacing={2} justify="center">
                <Grid item={true}>
                  <Link to={`/add-intention`}>
                    <Button
                      variant="contained"
                      color="primary"
                      data-testid="add-intention"
                    >
                      Dodaj intencję
                    </Button>
                  </Link>
                </Grid>
                <Grid item={true}>
                  <Link to={`/`}>
                    <Button variant="outlined" color="primary">
                      Jak to działa?
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </span>
          </Container>
        </span>
      </main>
    </React.Fragment>
  )
}

export default Hero
