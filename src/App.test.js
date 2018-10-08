import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import IdeaContainer from '../IdeaContainer';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })