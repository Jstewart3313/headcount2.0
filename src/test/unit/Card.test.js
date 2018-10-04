import React from 'react'
import { shallow, mount} from 'enzyme'

import Card from '../../Card'

describe( 'Card', () => {

  it('Should match the snapshot', () => {
    const mockLocation = 'Colorado';
    const mockStat = {
      '2017': .0872
    }

    const wrapper = shallow(<Card location={mockLocation} stats={mockStat} />)
  })

  
})