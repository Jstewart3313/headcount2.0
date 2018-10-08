import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import KinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer';
import SearchCardForm from './SearchCardForm';
import CompareContainer from './CompareContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compare: [],
      data: [],
      averageCard: {}
    };
  }

  componentDidMount() {
    const district = new DistrictRepository(KinderData);
    const districtStats = district.findAllMatches();
    this.setState({data: districtStats});
  }

  searchCard = (search) => {
    const district = new DistrictRepository(KinderData);
    const filteredstats = district.findAllMatches(search);
    this.setState( {data: filteredstats});
  };

  compareCards = (card1) => {
    const district = new DistrictRepository(KinderData);
    let theAverage = {};
    if (this.state.data[card1]) {
      this.state.compare.push(this.state.data[card1]);
    } else {
      let comparedSchool = this.state.data.find( school => {
        return school.location === card1; 
      });
      this.state.compare.push(comparedSchool);
    }
    if (this.state.compare.length > 2) {
      this.state.compare.shift();
    }
    if (this.state.compare.length === 2) {
      theAverage = district.compareDistrictAverages(
        this.state.compare[0].location, 
        this.state.compare[1].location
      );
    }
    this.setState({compare: this.state.compare,
      averageCard: theAverage
    });

  };

  render() {
    const { data, compare, averageCard } = this.state;
    return (
      <div>
        <SearchCardForm searchCard={this.searchCard} />
        <CompareContainer 
          compareCards={this.compareCards} 
          compare={ compare } 
          averageCard={ averageCard }  
        />
        <CardContainer data={ data } compareCards={ this.compareCards} />
      </div>
    );
  }
}

export default App;









