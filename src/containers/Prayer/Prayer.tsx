import {Grid} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import {makeStyles} from '@material-ui/core/styles'
import dayjs from 'dayjs'
import * as React from 'react'
import {useEffect, useState} from 'react'

import PrayCard from 'src/components/PrayCard'
// import PrayDisclaimerCard from 'src/components/PrayDisclaimerCard';
import {IIntention} from '../../components/IntentionCard/Interface'
import {getMystery} from '../../consts/rosary'
import {
  usePrayer,
  usePrayRosaryRequest,
  useSavePrayer,
} from '../../hooks/useRosaryApi'

const useStyles = makeStyles(theme => ({
  progress: {
    marginLeft: theme.spacing(2),
  },
}))

interface PrayerProps {
  intention: IIntention
  onPrayerChanged: (prayerId: string) => void
  prayerId: string
}

const Prayer: React.ComponentType<PrayerProps> = props => {
  const classes = useStyles()

  // TODO: rozbić state na poszczegolne zmienne
  const [type, setType] = useState(0)
  const [state, setState] = useState({
    id: props.prayerId,
    rosary: '',
    prayer: 'prayers/',
  })
  // const prayRequestApi = usePrayRosaryRequest()
  const {
    state: {data: prayRequestData, isLoading: isPrayRequestLoading},
    doRequest: doPrayRequest,
  } = usePrayRosaryRequest()
  const savePrayerApi = useSavePrayer()
  const getPrayerApi = usePrayer(props.prayerId)
  const [isPraying, setIsPraying] = useState(Boolean(props.prayerId))
  const prayRequestAction = () => {
    setType(0) // TODO: remove magic number
    doPrayRequest({intention: `intentions/${props.intention.id}`}, '')
    setIsPraying(true)
  }
  const prayAction = () => {
    setIsPraying(false)
    savePrayerApi.doRequest(
      {
        ...state,
        date: dayjs().toJSON(),
        lockDate: null,
      },

      state.prayer,
    )
  }

  useEffect(() => {
    setState({
      prayer: `prayers/${props.prayerId}`,
      ...getPrayerApi.state.data,
    })
  }, [props.prayerId])
  useEffect(() => {
    const {type, rosary, prayer} = prayRequestData
    setType(type)
    setState({
      id: props.prayerId,
      rosary,
      prayer,
    })

    if (prayer) {
      props.onPrayerChanged(prayer)
    }
  }, [isPrayRequestLoading])

  return (
    <Grid container={true} spacing={2}>
      <PrayCard
        mystery={getMystery(type)}
        isPraying={isPraying}
        onPrayAction={prayAction}
        onPrayRequestAction={prayRequestAction}
      />
      {isPrayRequestLoading ? (
        <CircularProgress className={classes.progress} size={18} />
      ) : null}
    </Grid>
  )
}

export default Prayer
