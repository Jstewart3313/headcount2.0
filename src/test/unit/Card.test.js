import React from 'react'
import { shallow, mount} from 'enzyme'

import Card from '../../Card'

describe( 'Card', () => {

  it('Should match the snapshot', () => {
    const mockStat = [{
      location: 'COLORADO',
      stats: {
        '2014': 1
        }
      },
      {
      location: 'Turing',
      stats: {
        '2014': 1
        }
      }
  ]

    const wrapper = shallow(<Card {...mockStat[0]} />)
    expect(wrapper).toMatchSnapshot()
  })

  
})