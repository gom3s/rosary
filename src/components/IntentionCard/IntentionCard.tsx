import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import LinearProgress from '@material-ui/core/LinearProgress'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

import {IIntention} from './Interface'
import Link from '../Link'

const image = '/img/rosary1.jpeg'
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
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}))

interface IntentionCardProps {
  intention: Partial<IIntention>
  isLoading?: boolean
  detailed?: boolean
  showDeleteAction?: boolean
}

const IntentionCard: React.ComponentType<IntentionCardProps> = ({
  intention,
  detailed,
  showDeleteAction,
  isLoading,
}) => {
  const classes = useStyles()
  const description = detailed && (
    <Typography>{intention.description}</Typography>
  )
  const deleteAction = showDeleteAction && (
    <div data-testid="delete-intention">
      <DeleteIcon />
    </div>
  )
  const actions = !detailed && (
    <CardActions>
      <Button size="small" color="primary">
        <Link to={`/intention/${intention.id}`}>Dalej</Link>
      </Button>
      {deleteAction}
    </CardActions>
  )

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom={true} variant="h5" component="h2">
          {isLoading ? <LinearProgress variant="query" /> : intention.title}
        </Typography>
        {isLoading ? <LinearProgress variant="query" /> : description}
      </CardContent>
      {actions}
    </Card>
  )
}

export default IntentionCard
