import React from 'react';
import Card from './Card';
import CompareCard from './CompareCard';
import PropTypes from 'prop-types';


const CompareContainer = ( {compare, compareCards, averageCard} ) => {
  let counter = 0;
  let comparedCards = compare.map( comparison => {
    return <Card {...comparison} 
      className={'card' + [comparison]} 
      key={counter++} 
      compareCards={ compareCards } 
    />;
  });

  return (
    <div className='Compare-container'>
      {comparedCards}
      <CompareCard averageCard={ averageCard } />
    </div>
  );
};

CompareContainer.propTypes = {
  compare: PropTypes.array,
  data: PropTypes.array,
  compareCards: PropTypes.func,
  averageCard: PropTypes.object
};


export default CompareContainer;