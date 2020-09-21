import {Grid} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import {makeStyles} from '@material-ui/core/styles'
import dayjs from 'dayjs'
import * as React from 'react'
import {useState} from 'react'

import PrayCard from 'src/components/PrayCard'
import {IIntention} from '../../components/IntentionCard/Interface'
import {getMystery} from '../../consts/rosary'
import {usePrayRosaryRequest, useSavePrayer} from '../../hooks/useRosaryApi'

const useStyles = makeStyles((theme) => ({
  progress: {
    marginLeft: theme.spacing(2),
  },
}))

interface PrayerProps {
  intention: IIntention
  prayerId: string
  updateStats: () => void
}

const Prayer: React.ComponentType<PrayerProps> = ({
  prayerId,
  intention,
  updateStats,
}) => {
  const classes = useStyles()
  const {
    type,
    rosary,
    prayer,
    isPrayRequestLoading,
    requestPrayer,
  } = usePrayRosaryRequest()
  const {
    state: {isLoading: isSavePrayerPending},
    doRequest: savePrayerRequest,
  } = useSavePrayer()
  const [isPraying, setIsPraying] = useState(Boolean(prayerId))
  const prayRequestAction = () => {
    requestPrayer({intention: `intentions/${intention.id}`}, '')
    setIsPraying(true)
    updateStats()
  }
  const prayAction = () => {
    setIsPraying(false)
    const payload = {
      id: prayerId,
      rosary,
      type,
      date: dayjs().toJSON(),
      lockDate: null,
    }
    savePrayerRequest(payload, prayer)
    updateStats()
  }

  return (
    <Grid container={true} spacing={2}>
      <PrayCard
        mystery={isPrayRequestLoading ? getMystery(0) : getMystery(type)}
        getPrayerButtonDisabled={isPraying || isSavePrayerPending}
        savePrayerButtonDisabled={!isPraying || isPrayRequestLoading}
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
