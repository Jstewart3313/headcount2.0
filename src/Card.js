import React, { Component } from 'react'
import PropTypes from 'prop-types'



class Card extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    }
  }



  handleClick = (e) => {

  }





  render() {
    const years = Object.keys(this.props.stats)
    let cardCounter = 0
    const schoolData = years.map( year => {
      return <p  className={(this.props.stats[year] > .5) ? 'data-above' : 'data-below'} key={cardCounter++} >
        {year} : {this.props.stats[year]}</p>
    })
    return (
      <div 
        className='card'
      >
        <h3 className='location'>{this.props.location}</h3>
           {schoolData}
      </div>
    )
  }
}




Card.propTypes = {
  stats: PropTypes.object.isRequired
}

export default Card