import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'

const image =
  'https://aleteiaen.files.wordpress.com/2017/08/web3-rosary-praying-devotion-ruggiero-scardigno-via-shutterstock_115129918.jpg?quality=100&strip=all&w=620&h=310&crop=1'
const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  cardContent: {
    flexGrow: 2,
  },
  cardMedia: {
    paddingTop: '26.25%', // 16:9
  },
  cardParagraph: {
    paddingBottom: theme.spacing(2), // 16:9
  },
}))

const PrayDisclaimerCard: React.ComponentType<{}> = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom={true} variant="h5" component="h2">
          Jak się modlić ?
        </Typography>
        <Typography className={classes.cardParagraph}>
          Gdy klikniesz "Pobierz tajemnicę" system zarezerwuje dla Ciebie
          kolejną tajemnicę różańca, który wspólnota odmawia w danej intencji.
          Odmów dziesiątek różańca rozważając w sercu tajemnicę, która się
          wyświetliła a ustnie mówiąc modlitwy (1xOjcze Nasz, 10xZdrowaś Maryjo,
          1xChwała Ojcu, 1xO mój Jezu), następnie kliknij "GOTOWE" aby zapisać
          postęp modlitwy w tej intencji.
        </Typography>
        <Typography gutterBottom={true} variant="h5" component="h2">
          Po co system rezerwuje (blokuje) tajemnicę na 10 min ?
        </Typography>
        <Typography className={classes.cardParagraph}>
          W danej intencji może się modlić wiele osób jednocześnie. Nawet gdy
          kilka osób kliknie w tym samym momencie "Pobierz tajemnicę", każdy
          otrzyma inną tajemnicę do rozważania na modlitwie. W efekcie modlitwy
          zawiązanej tak wspólnoty łączą się w jeden różaniec (na podobnej
          zasadzie działają Róże Różańcowe).
        </Typography>
        <Typography gutterBottom={true} variant="h5" component="h2">
          Co się stanie gdy nie skończę modlitwy lub nie zapiszę jej?
        </Typography>
        <Typography className={classes.cardParagraph}>
          Gdy 10 min rezerwacji tajemnicy upłynie i nikt nie potwierdzi, że
          odmówił dziesiątek różańca związany z daną tajemnicą to zostanie ona
          przez system przekazana następnej osobie, która kliknie "pobierz
          tajemnicę".
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PrayDisclaimerCard
