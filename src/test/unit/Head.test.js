import React from 'react'
import { shallow, mount} from 'enzyme'

import Header from '../../Header'

describe( 'Header', () => {

  it('Should match the snapshot', () => {

    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })

  
})