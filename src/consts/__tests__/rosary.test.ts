import { getMystery } from '../rosary';

test('Rosary helper', () => {
    const mystery11 = getMystery(11);
    const mystery12 = getMystery(12);
    const mystery24 = getMystery(24);
    
    expect(mystery11.title).toMatch('Zwiastowanie')
    expect(mystery12.title).toMatch('Nawiedzenie')
    expect(mystery11.group).toMatch('radosne')
    
    expect(mystery24.title).toMatch('Tabor')
    expect(mystery24.group).toMatch('światła')
  })

