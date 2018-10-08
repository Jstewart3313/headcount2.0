import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchCardForm from '../../SearchCardForm';

describe( 'SearchCardForm', () => {
  

  it('should match the snapshop', () => {

    const mockSearchCard = jest.fn()
    const wrapper = shallow(<SearchCardForm searchCard={mockSearchCard} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call trackChange when search input is changed', () => {
    const mockSearchCard = jest.fn()
    const wrapper = shallow(<SearchCardForm searchCard={mockSearchCard} />)
    const spy = spyOn(wrapper.instance(), 'trackChange')
    wrapper.instance().forceUpdate()
    const mockEvent = { target: { value: 'Colorado' } }

    wrapper.find('.search-input').simulate('change', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('updates state when trackChange is called', () => {
  const mockSearchCard = jest.fn()
  const wrapper = shallow(<SearchCardForm searchCard={mockSearchCard} />)
  const mockEvent = { target: { name: 'location', value: 'Colorado' } }

  wrapper.instance().trackChange(mockEvent)

  expect(wrapper.state('location')).toBe('Colorado')
  })

  it('calls handleSubmit onSubmit of the form', () => {
    const mockSearchCard = jest.fn()
    const wrapper = shallow(<SearchCardForm searchCard={mockSearchCard} />)
    const spy = spyOn(wrapper.instance(), 'handleSubmit');
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().forceUpdate();

    wrapper.find('.search-form').simulate('submit', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('calls searchCard when trackChange is called', () => {
    const mockSearchCard = jest.fn()
    const wrapper = shallow(<SearchCardForm searchCard={mockSearchCard} />)
    const mockEvent = { target: { value: 'Colorado' } }
    wrapper.instance().trackChange(mockEvent)

    expect(mockSearchCard).toHaveBeenCalled()
  })







})





