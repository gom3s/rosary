import {getMystery} from '../rosary'

test('Rosary helper', () => {
  const mystery1 = getMystery(1)
  const mystery7 = getMystery(7)
  const mystery18 = getMystery(18)

  expect(mystery1.title).toMatch('Zwiastowanie')
  expect(mystery7.title).toMatch('Objawienie')
  expect(mystery18.title).toMatch('Zesłanie Ducha Świętegoexit')
})
