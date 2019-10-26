import { rosary } from './rosary_pl'

export interface IMystery {
  "type": number;
  "title": string;
  "description": string;
}

export const getMystery = (type: number) => {
  if (type < 1 || type > 20) {
    return {
      type: 0,
      title: 'loading...',
      description: ''
    }
  }

  const mystery = rosary.find(mysteryByType(type)) 
  
  // tslint:disable-next-line: no-console
  console.log('type: ', type)

  return {
      type,
      title: mystery!.title,
      description: mystery!.description
  }
}

const mysteryByType = (type: number) => (mystery: IMystery) => mystery.type === type