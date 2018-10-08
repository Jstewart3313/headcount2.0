import React from 'react';
import PropTypes from 'prop-types';



const Card = ({stats, location, compareCards}) => {

  let years = Object.keys(stats);
    
  let cardCounter = 0;
    
  const schoolData = years.map( year => {
    return <p  className={(stats[year] > .5) ? 'data-above' : 'data-below'}
      name={location} key={cardCounter++} >
      {year} : {stats[year]}</p>;
  });


  this.handleClick = (event) => {
    let name = event.target.getAttribute('name');
    compareCards(name);

  };

  return (
    <div 
      className='card'
      name={location}
      onClick={this.handleClick}
    >
      <h3 name={location} className='location'>{location}</h3>
      {schoolData};
    </div>
  );
};



Card.propTypes = {
  stats: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  compareCards: PropTypes.isfunc
};

export default Card;




