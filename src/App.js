import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper'
import KinderData from './data/kindergartners_in_full_day_program.js'
import CardContainer from './CardContainer'
import SearchCardForm from './SearchCardForm'



class App extends Component {
  constructor() {
    super()
    this.state = {
      compare: [],
      data: {},
    }
  }


  componentDidMount() {
    const district = new DistrictRepository(KinderData);
    const stats = district.stats
    this.setState({data: stats })
  }

  searchCard = (search) => {
    const district = new DistrictRepository(KinderData);
    const filteredstats = district.findAllMatches(search)
    this.setState({data: filteredstats})
  }

  compareCards = () => {
    

  }






  render() {
    const { data } = this.state
    return (
      <div>
        <SearchCardForm searchCard={this.searchCard} />
        <CardContainer data={data} />
        {/* <CompareConatiner compareCards={this.compareCards} />*/}
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
