import React from 'react'
import PropTypes from 'prop-types'



const CompareCard = ({ averageCard } ) => {
  console.log(averageCard)
  let averageCardKeys = Object.keys( averageCard )
  let averageCardValues = Object.values( averageCard )
  return (
    <div> 
    <h3> {averageCardKeys[0]}</h3>
    <h3> {averageCardKeys[1]}</h3>
    <p> {averageCardValues[0]}</p>
    <p> {averageCardValues[1]}</p>
    <h3> {averageCardKeys[2]}</h3>
    <p> {averageCardValues[2]}</p>
    </div>
  )
}


export default CompareCard

// w3lc0meh0m3


