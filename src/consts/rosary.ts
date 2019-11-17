import {rosary} from './rosary_pl'

export interface Mystery {
  type: number
  title: string
  description: string
  image: string
}

export const getMystery = (type: number) => {
  if (type < 1 || type > 20) {
    return {
      type: 0,
      title: 'loading...',
      description: '',
      image: '/img/rosary1.jpeg',
    }
  }

  const mystery = rosary.find(mysteryByType(type))

  return {
    type,
    title: mystery!.title,
    description: mystery!.description,
    image: `/img/${type}.jpg`,
  }
}

const mysteryByType = (type: number) => (mystery: Mystery) =>
  mystery.type === type
