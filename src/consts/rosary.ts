import { rosary } from './rosary_pl'

export interface IMystery {
  "type": number;
  "title": string;
}

export const getMystery = (type: number) => {
  if (type < 1 || type > 20) {
    return {
      type: 0,
      title: 'loading...'
    }
  }

  const mystery = rosary.find(mysteryByType(type)) 
  
  // tslint:disable-next-line: no-console
  console.log('type: ', type)

  return {
      type,
      title: mystery!.title
  }
}

const mysteryByType = (type: number) => (mystery: IMystery) => mystery.type === type