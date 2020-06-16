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
import {MysteryTypes} from '../../consts/MysteryTypes'
import {usePrayRosaryRequest, useSavePrayer} from '../../hooks/useRosaryApi'

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

const Prayer: React.ComponentType<PrayerProps> = ({
  onPrayerChanged,
  prayerId,
  intention,
}) => {
  const classes = useStyles()
  const [type, setType] = useState(MysteryTypes.none)
  const [rosary, setRosary] = useState('')
  const {
    state: {data: prayRequestData, isLoading: isPrayRequestLoading},
    doRequest: doPrayRequest,
  } = usePrayRosaryRequest()
  const {
    state: {isLoading: isSavePrayerPending},
    doRequest: savePrayerRequest,
  } = useSavePrayer()
  const [isPraying, setIsPraying] = useState(Boolean(prayerId))
  const prayRequestAction = () => {
    setType(MysteryTypes.none)
    doPrayRequest({intention: `intentions/${intention.id}`}, '')
    setIsPraying(true)
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
    savePrayerRequest(payload, `prayers/${prayerId}`)
  }

  useEffect(() => {
    const {type, rosary, prayer} = prayRequestData
    setType(type)
    setRosary(rosary)

    onPrayerChanged(prayer)
  }, [isPrayRequestLoading])

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
