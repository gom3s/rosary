export interface Prayer {
  id: string
  rosary: string
  type: number
  date?: Date
  lockDate?: Date
}
export const emptyPrayer = {
  id: '',
  rosary: '',
  type: 0,
}
