import React, {FC} from 'react'
import {
  Card,
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core'
import {RosaryIcon} from '../Icons'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
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

export const AddIntentionCard: FC<{}> = () => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.card} data-testid="add-intention-card">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <RosaryIcon />
            <Typography component="h1" variant="h5">
              Dodaj intencję
            </Typography>
            <form
              className={classes.form}
              noValidate={true}
              onSubmit={() => {}}
            >
              <TextField
                variant="outlined"
                margin="normal"
                multiline
                rows={6}
                required
                fullWidth
                id="intention"
                label="Moja intencja"
                name="intention"
                autoComplete=""
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Wyślij
              </Button>
            </form>
          </div>
        </Container>
      </Card>
    </>
  )
}
