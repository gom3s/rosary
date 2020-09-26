import {MysteryTypes} from 'src/consts/MysteryTypes'
import api from 'src/services/api'
import {useRequest} from '../useRequest'

const emptyPrayRequest: IPrayRequest = {
  type: MysteryTypes.none,
  rosary: '',
  prayer: '',
}

export interface IPrayRequest {
  type: MysteryTypes
  rosary: string
  prayer: string
}
type TUsePrayRequest = IPrayRequest & {
  isPrayRequestLoading: boolean
  doPrayRequest: (payload: {}, endpoint?: string) => void
}

export const usePrayRosaryRequest = (): TUsePrayRequest => {
  const {
    state: {
      data: {type, rosary, prayer},
      isLoading: isPrayRequestLoading,
    },
    doRequest: doPrayRequest,
  } = useRequest(api.post, `pray_rosary_requests`, emptyPrayRequest)

  return {type, rosary, prayer, isPrayRequestLoading, doPrayRequest}
}
