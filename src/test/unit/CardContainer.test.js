import React from 'react'
import { mount, shallow } from 'enzyme'

import CardContainer from '../../CardContainer'

describe('CardContainer', () => {

  it('should match the snapshot with no thoughts', () => {
    const mockData = {
      location: 'colorado',
      stats: {
        '2017': .017
      }
    }
    const wrapper = shallow(<CardContainer data={mockData} />);
    expect(wrapper).toMatchSnapshot()
  });

})