import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper'
import KinderData from './data/kindergartners_in_full_day_program.js'
import CardContainer from './CardContainer'
import SearchCardForm from './SearchCardForm'
import CompareContainer from './CompareContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      compare: [],
      data: [],
    }
  }

  componentDidMount() {
    const district = new DistrictRepository(KinderData);
    const districtStats = district.findAllMatches();
    this.setState({data: districtStats})
  }

  searchCard = (search) => {
    const district = new DistrictRepository(KinderData);
    const filteredstats = district.findAllMatches(search)
    this.setState( {data: filteredstats})
  }

  compareCards = (card1) => {
      if( this.state.data[card1]) {
        this.state.compare.push(this.state.data[card1])
      } 
      else {
        let comparedSchool = this.state.data.find( school => {
           return school.location === card1 
        })
        this.state.compare.push(comparedSchool)
      }
      if ( this.state.compare.length > 2) {
        this.state.compare.shift()
      }
      this.setState({compare: this.state.compare})


  }

  render() {
    const { data , compare } = this.state
    return (
      <div>
        <SearchCardForm searchCard={this.searchCard} />
        <CardContainer data={ data } compareCards={ this.compareCards} />
        <CompareContainer compareCards={this.compareCards} compare={ compare } />
      </div>
    );
  }
}

export default App;









/*
  create compareCards method...
  set a property in state of compare to empty array
  pass the comparecards method down to card for access
  then pass state.compare to compare container

  conditional render for compare method...

*/
