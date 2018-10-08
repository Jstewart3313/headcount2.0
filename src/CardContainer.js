import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


const CardContainer = ( {data, compareCards} ) => {
  
  let dataKeys = Object.keys(data);
  
  let counter = 0;
  
  const exp = dataKeys.map( point =>
    <Card {...data[point]} 
      className={'card' + [point]} 
      key={counter++} 
      compareCards={ compareCards } 
    />
  );
  return (
    <div className='card-container'>
      { exp }
    </div>
  );
};



CardContainer.propTypes = {
  data: PropTypes.array,
  compareCards: PropTypes.func
};

export default CardContainer;