import React, { Component } from 'react'



class Card extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    }
  }


  


  render() {
    const years = Object.keys(this.props.stats)
    const schoolData = years.map( year => {
      return <p className={(this.props.stats[year] > .5) ? 'data-above' : 'data-below'}>
        {year} : {this.props.stats[year]}</p>
    })
    return (
      <div 
        className='card'
        onClick=""
      >
        <h3 className='location'>{this.props.location}</h3>
           {schoolData}
      </div>
    )
  }
}

export default Card