import {MysteryTypes} from 'src/consts/MysteryTypes'
import api from 'src/services/api'
import {useRequest} from '../useRequest'

const emptyPrayRequest = {
  id: null,
  intention: null,
  prayer: null,
  type: MysteryTypes.none,
}

export const usePrayRosaryRequest = () =>
  useRequest(api.post, `pray_rosary_requests`, emptyPrayRequest)
