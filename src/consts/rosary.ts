import { rosary } from './rosary_pl'

interface IMystery {
  "type": number;
  "title": string;
}

interface IMysteryGroup {
  "id": number;
  "name": string;
  "mysteries": IMystery[]
}

export const getMystery = (type: number) => {
  const mysteryGroup = rosary.find(mysteryGroupByType(type));
  const mystery = mysteryGroup 
    ? findMysteryFromGroupByType(mysteryGroup, type)
    : null;

  return {
      group: mysteryGroup!.name,
      title: mystery!.title
  }
}

const mysteryGroupByType = (type: number) => (mysteryGroup: IMysteryGroup) => (mysteryGroup.id > type - 5)
const mysteryByType = (type: number) => (mystery: IMystery) => mystery.type === type
const findMysteryFromGroupByType = (mysteryGroup: IMysteryGroup, type: number) => mysteryGroup.mysteries.find(mysteryByType(type))