import React, { Component } from 'react'
import Card from './Card'
import CompareCard from './CompareCard'


const CompareContainer = ( {compare, data, compareCards, averageCard} ) => {
  let counter = 0
  let comparedCards = compare.map( comparison => {
     return <Card {...comparison} 
                    className={'card' + [comparison]} 
                    key={counter++} 
                    compareCards={ compareCards } 
            />
  })

  return (
    <div className='Compare-container'>
    {comparedCards}
    <CompareCard averageCard={ averageCard } />
    </div>
  )
}

export default CompareContainer