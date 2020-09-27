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
  const {
    activePrayer: {
      isPraying: activePrayerisPraying,
      setIspraying: setActivePrayerIsPraying,
      setActivePrayerData,
      data: {type, intentionId, rosary, prayer},
    },
  } = React.useContext(UIContext)
  const isInContextPrayer =
    activePrayerisPraying && intentionId === intention.id

  const prayRequest = usePrayRosaryRequest()
  const {prayRequestSuccess, isPrayRequestLoading} = prayRequest
  const {
    state: {isLoading: isSavePrayerPending},
    doRequest: savePrayerRequest,
  } = useSavePrayer()
  const [isPraying, setIsPraying] = useState(isInContextPrayer)
  const prayRequestAction = () => {
    prayRequest.doPrayRequest({intention: `intentions/${intention.id}`}, '')
    setIsPraying(true)
    setActivePrayerIsPraying(true)
  }
  const prayAction = () => {
    setIsPraying(false)
    setActivePrayerIsPraying(false)
    const payload = {
      id: prayerId,
      rosary,
      type,
      date: dayjs().toJSON(),
      lockDate: null,
    }
    savePrayerRequest(payload, prayer)
  }
  React.useEffect(() => {
    if (prayRequestSuccess) {
      setActivePrayerData({
        prayer: prayRequest.prayer,
        rosary: prayRequest.rosary,
        type: prayRequest.type,
        intentionId: intention.id,
      })
      setActivePrayerIsPraying(true)
    }
  }, [
    prayRequestSuccess,
    isPrayRequestLoading,
    setActivePrayerData,
    setActivePrayerIsPraying,
    prayRequest.prayer,
    prayRequest.rosary,
    prayRequest.type,
  ])

  const mystery = isPrayRequestLoading
    ? getMystery(0)
    : getMystery(type ? type : prayRequest.type)

  return (
    <Grid container={true} spacing={2}>
      <PrayCard
        mystery={mystery}
        getPrayerButtonDisabled={isPraying || isSavePrayerPending}
        savePrayerButtonDisabled={!isPraying || isPrayRequestLoading}
        onPrayAction={prayAction}
        onPrayRequestAction={prayRequestAction}
        isLoading={isPrayRequestLoading}
      />
    </Grid>
  )
}
