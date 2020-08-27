import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import React, {FC} from 'react'
import Hero from '../../components/Hero'
import IntentionCard from '../../components/IntentionCard'
import {useIntentionList} from '../../hooks/useRosaryApi'
import {IAuthRole, AuthContext} from 'src/context/AuthProvider'
import { DeleteIntentionDialog } from 'src/components/DeleteIntentionDialog'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(8),
  },
}))

interface IntentionListProps {}

const IntentionList: FC<IntentionListProps> = () => {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
  const classes = useStyles()
  const {intentions} = useIntentionList()
  const {hasRole} = React.useContext(AuthContext)
  const isAdmin = hasRole(IAuthRole.ROLE_ADMIN)
  const openDeleteIntentionDialog = isAdmin
    ? () => {
        setDeleteDialogOpen(true)
      }
    : undefined
  const handleDeleteIntention = () => {}

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
              <IntentionCard
                intention={intention}
                onDeleteAction={openDeleteIntentionDialog}
              />
            </Grid>
          ))}
        </Grid>
        <DeleteIntentionDialog
          open={deleteDialogOpen}
          handleClose={() => setDeleteDialogOpen(false)}
          onDelete={handleDeleteIntention}
        />
      </Container>
    </>
  )
}

export default IntentionList
