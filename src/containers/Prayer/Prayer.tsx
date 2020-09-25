import {Grid} from '@material-ui/core'
import dayjs from 'dayjs'
import * as React from 'react'
import {useState} from 'react'

import {PrayCard} from 'src/components/PrayCard'
import {IIntention} from 'src/components/IntentionCard/Interface'
import {getMystery} from 'src/consts/rosary'
import {usePrayRosaryRequest, useSavePrayer} from 'src/hooks/useRosaryApi'
import {UIContext} from 'src/context/UIStateProvider'

interface PrayerProps {
  intention: IIntention
  prayerId: string
}

export const Prayer: React.ComponentType<PrayerProps> = ({
  prayerId,
  intention,
}) => {
  const {startedPrayer} = React.useContext(UIContext)

  const {
    state: {
      data: {type, rosary, prayer},
      isLoading: isPrayRequestLoading,
    },
    doRequest: doPrayRequest,
  } = usePrayRosaryRequest()
  const {
    state: {isLoading: isSavePrayerPending},
    doRequest: savePrayerRequest,
  } = useSavePrayer()
  const [isPraying, setIsPraying] = useState(startedPrayer.isPraying)
  const prayRequestAction = () => {
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
    savePrayerRequest(payload, prayer)
  }

  return (
    <Grid container={true} spacing={2}>
      <PrayCard
        mystery={isPrayRequestLoading ? getMystery(0) : getMystery(type)}
        getPrayerButtonDisabled={isPraying || isSavePrayerPending}
        savePrayerButtonDisabled={!isPraying || isPrayRequestLoading}
        onPrayAction={prayAction}
        onPrayRequestAction={prayRequestAction}
        isLoading={isPrayRequestLoading}
      />
    </Grid>
  )
}
