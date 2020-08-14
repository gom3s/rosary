import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import Hero from '../../components/Hero'
import IntentionCard from '../../components/IntentionCard'
import {useIntentionList} from '../../hooks/useRosaryApi'
import {IAuthRole, AuthContext} from 'src/context/AuthProvider'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(8),
  },
}))

const IntentionList = (props: any) => {
  const classes = useStyles()
  const {state} = useIntentionList()
  const {data: intentions} = state
  const {hasRole} = React.useContext(AuthContext)
  const isAdmin = hasRole(IAuthRole.ROLE_ADMIN)

  return (
    <>
      <Hero />
      <Container
        className={classes.cardGrid}
        maxWidth="md"
        data-testid="intention-list"
      >
        {/* End hero unit */}
        <Grid container={true} spacing={4}>
          {intentions.map(intention => (
            <Grid item={true} key={intention.id} xs={12} sm={6} md={4}>
              <IntentionCard intention={intention} showDeleteAction={isAdmin} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default IntentionList
