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
      data: activePrayerData,
    },
  } = React.useContext(UIContext)
  const isInContextPrayer =
    activePrayerisPraying && activePrayerData.intentionId === intention.id

  const {
    type,
    rosary,
    prayer,
    isPrayRequestLoading,
    prayRequestSuccess,
    doPrayRequest,
  } = usePrayRosaryRequest()
  const {
    state: {isLoading: isSavePrayerPending},
    doRequest: savePrayerRequest,
  } = useSavePrayer()
  const [isPraying, setIsPraying] = useState(isInContextPrayer)
  const prayRequestAction = () => {
    doPrayRequest({intention: `intentions/${intention.id}`}, '')
    setIsPraying(true)
    setActivePrayerIsPraying(true)
  }
  const prayAction = () => {
    setIsPraying(false)
    setActivePrayerIsPraying(false)
    const payload = {
      id: prayerId,
      rosary: isInContextPrayer ? activePrayerData.rosary : rosary,
      type: isInContextPrayer ? activePrayerData.type : type,
      date: dayjs().toJSON(),
      lockDate: null,
    }
    savePrayerRequest(
      payload,
      isInContextPrayer ? activePrayerData.prayer : prayer,
    )
  }
  React.useEffect(() => {
    if (prayRequestSuccess) {
      setActivePrayerData({
        prayer,
        rosary,
        type,
        intentionId: intention.id,
      })
      setActivePrayerIsPraying(true)
    }
  }, [
    prayRequestSuccess,
    isPrayRequestLoading,
    setActivePrayerData,
    setActivePrayerIsPraying,
    prayer,
    rosary,
    type,
  ])

  const mystery = isPrayRequestLoading
    ? getMystery(0)
    : getMystery(isInContextPrayer ? activePrayerData.type : type)

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
