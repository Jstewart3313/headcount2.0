import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('searchCard adds card to state', () => {
    const initialState = []
    const mockStat = 'COLORADO'
    const expectedStat = [{
      location: 'COLORADO',
      stats: {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741,
        }
      },
      {
      location: 'COLORADO SPRINGS 11',
      stats: {
       "2004": 0.069,
       "2005": 0.509,
       "2006": 0.638,
       "2007": 0.994,
       "2008": 0.992,
       "2009": 1,
       "2010": 0.993,
       "2011": 0.994,
       "2012": 0.993,
       "2013": 0.989,
       "2014": 0.994,
        }
      }
  ]

    wrapper.setState({ data: initialState })
    wrapper.instance().searchCard(mockStat)

    expect(wrapper.state('data')).toEqual(expectedStat)
    expect(wrapper.state('data').length).toEqual(2)
  })

  it('CompareCards adds an Comparison to state', () => {
    const initialState = []
    const mockCompare = 'COLORADO'
    const expected = [{
      location: 'COLORADO',
      stats: {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741,
        }
      }]

    wrapper.setState({ ideas: initialState })
    wrapper.instance().compareCards(mockCompare)

    expect(wrapper.state('compare')).toEqual(expected)
    expect(wrapper.state('compare').length).toEqual(1)
  })



})







