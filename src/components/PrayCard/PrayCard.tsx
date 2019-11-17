import {Grid} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import {Mystery} from 'src/consts/rosary'

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
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
}))

interface PrayCardProps {
  isPraying: boolean
  mystery: Mystery
  onPrayRequestAction: () => void
  onPrayAction: () => void
}

const PrayCard: React.ComponentType<PrayCardProps> = props => {
  const {isPraying, mystery} = props

  const classes = useStyles()
  const actions = (
    <CardActions>
      <Button
        size="small"
        color="primary"
        onClick={props.onPrayRequestAction}
        disabled={isPraying}
      >
        Pobierz tajemnicę
      </Button>
      <Button
        size="small"
        color="primary"
        onClick={props.onPrayAction}
        disabled={!isPraying}
      >
        Gotowe (zapisz)
      </Button>
    </CardActions>
  )

  return (
    <Card className={classes.card}>
      <Grid container={true} justify="center" alignItems="center">
        <Avatar alt="..." src={mystery.image} className={classes.bigAvatar} />
      </Grid>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom={true} variant="h5" component="h2">
          {isPraying ? mystery.title : null}
        </Typography>
        <Typography>{isPraying ? mystery.description : null}</Typography>
        {/* TODO display pondering of mystery */}
      </CardContent>
      {actions}
    </Card>
  )
}

export default PrayCard
